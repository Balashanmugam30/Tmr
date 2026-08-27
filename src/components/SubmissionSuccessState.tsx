import React from 'react';
import { Link } from 'react-router-dom';

interface SubmissionSuccessStateProps {
  whatsappUrl?: string;
  onReset: () => void;
}

export const SubmissionSuccessState: React.FC<SubmissionSuccessStateProps> = ({
  whatsappUrl,
  onReset,
}) => {
  return (
    <div
      role="region"
      aria-live="polite"
      aria-label="Submission Confirmation"
      className="w-full bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 text-white space-y-6 animate-fade-in transition-all duration-300"
    >
      {/* MINIMAL ORANGE CONFIRMATION MARK */}
      <div className="w-12 h-12 rounded-full bg-[#FF4B00]/10 border border-[#FF4B00]/30 flex items-center justify-center text-[#FF4B00] font-black text-xl mb-2">
        ✓
      </div>

      <div>
        <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
          CONFIRMATION
        </span>
        <h3 className="font-manrope font-extrabold text-3xl uppercase tracking-tight text-white">
          ENQUIRY PREPARED.
        </h3>
      </div>

      <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 leading-relaxed max-w-lg font-normal">
        Your enquiry details have been successfully prepared for WhatsApp communication. Click below to initiate direct messaging with our detailing specialists at TMR Studio Tiruppur.
      </p>

      <div className="w-full h-px bg-white/10 my-4" />

      {/* RECOVERY ACTION LINKS (NON-BOXY TEXT + ARROW) */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
          >
            <span>OPEN WHATSAPP AGAIN</span>
            <span className="text-sm">→</span>
          </a>
        )}

        <button
          onClick={onReset}
          type="button"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors cursor-pointer"
        >
          <span>SEND ANOTHER ENQUIRY</span>
          <span className="text-sm">→</span>
        </button>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
        >
          <span>EXPLORE SERVICES</span>
          <span className="text-sm">→</span>
        </Link>
      </div>
    </div>
  );
};

export default SubmissionSuccessState;
