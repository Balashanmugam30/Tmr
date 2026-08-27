import React from 'react';
import { companyData } from '@/data/company';

interface SubmissionErrorStateProps {
  errorMessage?: string;
  onRetry: () => void;
}

export const SubmissionErrorState: React.FC<SubmissionErrorStateProps> = ({
  errorMessage = "Please check your contact details and try again.",
  onRetry,
}) => {
  return (
    <div
      role="region"
      aria-live="assertive"
      aria-label="Submission Notice"
      className="w-full bg-[#121212] border border-[#FF4B00]/40 rounded-2xl p-8 sm:p-12 text-white space-y-6 animate-fade-in transition-all duration-300"
    >
      {/* MUTED ORANGE WARNING MARK */}
      <div className="w-12 h-12 rounded-full bg-[#FF4B00]/10 border border-[#FF4B00]/30 flex items-center justify-center text-[#FF4B00] font-black text-xl mb-2">
        !
      </div>

      <div>
        <span className="font-mono text-[11px] font-bold text-[#FF4B00] uppercase tracking-widest block mb-1">
          SUBMISSION NOTICE
        </span>
        <h3 className="font-manrope font-extrabold text-3xl uppercase tracking-tight text-white">
          WE COULDN&apos;T SEND THAT.
        </h3>
      </div>

      <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 leading-relaxed max-w-lg font-normal">
        Something went wrong while preparing your enquiry. {errorMessage}
      </p>

      <div className="w-full h-px bg-white/10 my-4" />

      {/* RECOVERY ACTION LINKS (NON-BOXY TEXT + ARROW) */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          onClick={onRetry}
          type="button"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors cursor-pointer"
        >
          <span>TRY AGAIN</span>
          <span className="text-sm">→</span>
        </button>

        <a
          href={`https://wa.me/${companyData.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
        >
          <span>WHATSAPP TMR</span>
          <span className="text-sm">→</span>
        </a>

        <a
          href={`tel:${companyData.contact.phone}`}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b-2 border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
        >
          <span>CALL STUDIO</span>
          <span className="text-sm">→</span>
        </a>
      </div>
    </div>
  );
};

export default SubmissionErrorState;
