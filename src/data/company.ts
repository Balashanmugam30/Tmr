export interface CompanyInfo {
  name: string;
  tagline: string;
  subtitle: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullText: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
  };
  hours: {
    weekdays: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const companyData: CompanyInfo = {
  name: "TMR Car Care",
  tagline: "Premium Automotive Care & Detailing Flagship",
  subtitle: "Brutalist Editorial Detail Studio in Tiruppur, Tamil Nadu",
  address: {
    street: "Avinashi Road, Near Hope College Junction",
    area: "Tiruppur North",
    city: "Tiruppur",
    state: "Tamil Nadu",
    pincode: "641602",
    country: "India",
    fullText: "Avinashi Road, Near Hope College Junction, Tiruppur, Tamil Nadu - 641602",
  },
  contact: {
    phone: "+919876543210",
    phoneFormatted: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappFormatted: "+91 98765 43210",
    email: "enquiry@tmrcarcare.com",
  },
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: 10:00 AM – 5:00 PM (By Appointment Only)",
  },
  social: {
    instagram: "https://instagram.com/tmrcarcare",
    facebook: "https://facebook.com/tmrcarcare",
    youtube: "https://youtube.com/@tmrcarcare",
  },
};
