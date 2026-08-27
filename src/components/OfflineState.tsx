import React, { useState, useEffect } from 'react';

export const OfflineState: React.FC = () => {
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  useEffect(() => {
    // Initial check
    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
    }

    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  const handleRetryConnection = async () => {
    setIsChecking(true);
    try {
      // Check online status and attempt a lightweight ping
      if (navigator.onLine) {
        const response = await fetch('/favicon.ico', { method: 'HEAD', cache: 'no-store' });
        if (response.ok || response.type === 'opaque') {
          setIsOffline(false);
        }
      }
    } catch {
      setIsOffline(true);
    } finally {
      setIsChecking(false);
    }
  };

  if (!isOffline) return null;

  return (
    <aside
      role="status"
      aria-live="assertive"
      aria-label="Offline status banner"
      className="fixed bottom-6 right-6 z-[9999] max-w-md w-[calc(100vw-3rem)] bg-[#090909] text-[#F1EEE7] border border-[#FF4B00]/40 rounded-xl p-6 shadow-2xl font-manrope animate-fade-in transition-all duration-300 select-none"
    >
      {/* SUBTLE VIGNETTE */}
      <div className="absolute inset-0 bg-radial from-[#FF4B00]/10 via-transparent to-black/80 pointer-events-none rounded-xl" />

      <div className="relative z-10 space-y-3">
        {/* STATUS INDICATOR */}
        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF4B00]">
          <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-pulse" />
          <span>CONNECTION LOST</span>
        </div>

        {/* HEADLINE */}
        <h4 className="font-manrope font-extrabold text-xl uppercase tracking-tight text-white">
          YOU&apos;RE OFFLINE.
        </h4>

        {/* CALM STATEMENT */}
        <p className="text-xs text-[#D8D8D5]/80 leading-relaxed font-normal">
          The connection appears to be unavailable. Cached TMR Car Care content remains viewable, but some updates may not be available until you are back online.
        </p>

        {/* RETRY ACTION LINK */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleRetryConnection}
            disabled={isChecking}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
          >
            <span>{isChecking ? 'CHECKING...' : 'RETRY CONNECTION'}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => setIsOffline(false)}
            type="button"
            className="text-[10px] font-bold text-[#888885] hover:text-white uppercase tracking-wider transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </aside>
  );
};

export default OfflineState;
