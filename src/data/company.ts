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
  mapUrl: string;
}

export const companyData: CompanyInfo = {
  name: "TMR AI Car Care",
  tagline: "Premium Automotive Care & Detailing Flagship",
  subtitle: "Brutalist Editorial Detail Studio in Tiruppur, Tamil Nadu",
  address: {
    street: "Arulpuram",
    area: "Karaiputhur",
    city: "Tiruppur",
    state: "Tamil Nadu",
    pincode: "641605",
    country: "India",
    fullText: "TMR AI Car Care, Arulpuram, Karaiputhur, Tiruppur, Tamil Nadu - 641605",
  },
  contact: {
    phone: "+919655626217",
    phoneFormatted: "+91 96556 26217",
    whatsapp: "919655626217",
    whatsappFormatted: "+91 96556 26217",
    email: "3m.chandramohankandhavelu@gmail.com",
  },
  hours: {
    weekdays: "Monday – Saturday: 9:30 AM – 7:00 PM",
    sunday: "Sunday: 9:30 AM – 7:00 PM",
  },
  social: {
    instagram: "https://www.instagram.com/tmraicarcare/",
    facebook: "https://www.facebook.com/profile.php?id=61594308280275",
    youtube: "https://youtube.com/@tmrcarcare",
  },
  mapUrl: "https://maps.app.goo.gl/KJ5ReoumU85SCNRX9?g_st=ac",
};
