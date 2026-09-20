// Vercel Serverless Function: POST /api/contact
// Direct Consultation Enquiry System for TMR AI Car Care

interface EnquiryPayload {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  message?: string;
  honeypot?: string;
}

// In-memory rate limiting store (per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

export default async function handler(req: any, res: any) {
  // 1. Method verification
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Rate limiting check by IP
  const clientIp =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
  }

  try {
    // 3. Parse and normalize body
    const body: EnquiryPayload =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    const { name, phone, vehicle, service, message, honeypot } = body;

    // 4. Anti-spam honeypot check
    // If the invisible honeypot field is filled, silently reject the bot payload
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(200).json({ success: true });
    }

    // 5. Server-side validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';
    const trimmedVehicle = typeof vehicle === 'string' ? vehicle.trim() : '';
    const trimmedService = typeof service === 'string' ? service.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return res.status(400).json({ error: 'Please provide a valid name (2-100 characters).' });
    }

    // Phone validation: min 7, max 25 chars, contains digits
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || phoneDigits.length < 7 || trimmedPhone.length > 25) {
      return res.status(400).json({ error: 'Please provide a valid phone or WhatsApp number.' });
    }

    if (!trimmedVehicle || trimmedVehicle.length < 2 || trimmedVehicle.length > 100) {
      return res.status(400).json({ error: 'Please provide a valid vehicle make & model (2-100 characters).' });
    }

    const allowedServices = [
      'Car Wash & Cleaning',
      'Detailing & Paint Care',
      'Ceramic Coating',
      'PPF & Paint Protection',
      'Sun-Control Films',
      'Car Accessories',
    ];

    if (!trimmedService || (!allowedServices.includes(trimmedService) && trimmedService.length > 100)) {
      return res.status(400).json({ error: 'Please select a valid service interest.' });
    }

    if (trimmedMessage.length > 2000) {
      return res.status(400).json({ error: 'Message exceeds maximum length of 2000 characters.' });
    }

    // 6. Resend API Key check
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[TMR Contact API] RESEND_API_KEY environment variable is not configured.');
      return res.status(500).json({ error: 'Enquiry service temporarily unavailable.' });
    }

    // 7. Format Timestamp in IST (Asia/Kolkata)
    const timestamp = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    }).format(new Date());

    // 8. Construct Email Payload for Resend
    const textContent = `TMR AI CAR CARE
DIRECT CONSULTATION ENQUIRY

Name:
${trimmedName}

Phone / WhatsApp:
${trimmedPhone}

Vehicle Make & Model:
${trimmedVehicle}

Service Interest:
${trimmedService}

Message / Specific Requirements:
${trimmedMessage || 'None provided'}

Submitted:
${timestamp}

Source:
https://tmraicarcare.com`;

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New TMR AI Car Care Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0c0c0b; color: #f1eee7; padding: 24px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #141413; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px;">
    <div style="border-bottom: 2px solid #FF4B00; padding-bottom: 16px; margin-bottom: 24px;">
      <p style="margin: 0; font-size: 11px; font-weight: 800; letter-spacing: 0.15em; color: #FF4B00; text-transform: uppercase;">DIRECT CONSULTATION ENQUIRY</p>
      <h1 style="margin: 6px 0 0 0; font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.02em;">TMR AI CAR CARE</h1>
    </div>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; width: 160px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Customer Name:</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 800; font-size: 16px;">${trimmedName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Phone / WhatsApp:</td>
        <td style="padding: 10px 0; color: #FF4B00; font-weight: 800; font-size: 16px;">
          <a href="tel:${trimmedPhone}" style="color: #FF4B00; text-decoration: none;">${trimmedPhone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Vehicle:</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 700;">${trimmedVehicle}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Service Interest:</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 700;">${trimmedService}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; vertical-align: top;">Message:</td>
        <td style="padding: 10px 0; color: #e5e5e5; line-height: 1.5; white-space: pre-wrap;">${trimmedMessage || '<em>None provided</em>'}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Submitted:</td>
        <td style="padding: 10px 0; color: #a0a09c; font-size: 13px;">${timestamp}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #888885; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Source:</td>
        <td style="padding: 10px 0; color: #a0a09c; font-size: 13px;">
          <a href="https://tmraicarcare.com" style="color: #FF4B00; text-decoration: none;">https://tmraicarcare.com</a>
        </td>
      </tr>
    </table>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
      <a href="https://wa.me/${phoneDigits}?text=Hello%20${encodeURIComponent(trimmedName)},%20thank%20you%20for%20contacting%20TMR%20AI%20Car%20Care!"
         style="display: inline-block; background-color: #25D366; color: #ffffff; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 24px; border-radius: 6px; text-decoration: none;">
        Reply to Customer on WhatsApp →
      </a>
    </div>
  </div>
</body>
</html>`;

    // 9. Dispatch via Resend REST API
    const fromSender = process.env.RESEND_FROM_EMAIL || 'TMR AI Car Care <enquiry@tmraicarcare.com>';

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromSender,
        to: ['3m.chandramohankandhavelu@gmail.com'],
        subject: `New TMR AI Car Care Enquiry — ${trimmedName}`,
        text: textContent,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error('[TMR Contact API] Resend dispatch failed:', resendResponse.status, errorData?.message || 'Unknown error');
      return res.status(500).json({
        error: errorData?.message || 'Failed to deliver enquiry notification. Please try submitting via WhatsApp directly.'
      });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('[TMR Contact API] Internal handler error:', err?.message || err);
    return res.status(500).json({ error: 'An unexpected error occurred while processing your enquiry.' });
  }
}
