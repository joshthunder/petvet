import React from 'react';
import { useNavigate } from 'react-router-dom';

const Teleconsultation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-background-dark font-display">
      <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1a2c2a] border-b border-slate-100 dark:border-slate-800 shadow-sm z-20 shrink-0">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
          <span className="material-symbols-outlined text-slate-800 dark:text-white group-hover:text-primary transition-colors">arrow_back_ios_new</span>
        </button>
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-1">
            <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-slate-100 dark:border-slate-700 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0g28A3WhV02UuImiVHSmfG5cGtZdKc5zNDyd_Iih2F85j5t4EMqr5DNgz91raCA8CUwSAgDwmbc11LM0i7hzVua9ECuOaIORS8SYIZjMD3NT3aPyALQ0zuG1Rj1I8pbBPl75Ab5HAFy3hW5_FtWQkG-efd8jQhTUnsD29IOQtvlaeHbpVsRuGRQR2aX_wAgqrP-pCdjkk7-VLv8OY9oMx7wj_RAF5mDB5a7asqQYo4Tfho-qJrurT6UZbLnwgoEY8fEfBWhvLEZG1")' }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1a2c2a] rounded-full"></div>
          </div>
          <div className="flex flex-col items-center leading-none">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Dr. Sarah Jenkins</h2>
            <span className="text-[10px] font-medium text-primary mt-0.5">Online</span>
          </div>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors group relative">
          <span className="material-symbols-outlined text-primary dark:text-primary filled">videocam</span>
          <span className="absolute top-2 right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-background-dark hide-scrollbar">
        <div className="flex justify-center py-2">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-4 py-1.5 rounded-full shadow-sm">
            Consultation Started at 10:00 AM
          </p>
        </div>

        <div className="group flex items-end gap-3 w-full animate-[fadeIn_0.3s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCosxOvG0dTPTKVUtGHK3zzUWOfK5520qAA8igjpZ2ZWqSkw8kb3P1dtRpJAUUw_vLrXb55IvAZyihabIlhVzhpsnCiGqO0t2hJxIf5x6QG-NoRJUzIwMJri7XUvM9HItu8rSzKXkoNDtStXkQhMX2yLHge0uMd3ZHJXXmIrCznzZc8ekZF5UKarh_XOtmwNS_SnI-xPrRJ1zPLyha5j1B-U8jUiWfDOsr87TlZ8TAh2kQKK2uzNWvY1fOhRK90MVbNUwLFnfvotOsc")' }}></div>
          <div className="flex flex-col items-start gap-1 max-w-[75%]">
            <div className="px-5 py-3 bg-[#F3F4F6] dark:bg-[#1E2D2B] rounded-2xl rounded-bl-none text-slate-800 dark:text-slate-100 text-[15px] font-medium leading-relaxed shadow-sm">
              Hello! I see you're concerned about Bella's appetite. How long has she been refusing food?
            </div>
            <span className="text-[10px] text-slate-400 font-medium ml-1">10:02 AM</span>
          </div>
        </div>

        <div className="group flex flex-row-reverse items-end gap-3 w-full animate-[fadeIn_0.4s_ease-out]">
          <div className="flex flex-col items-end gap-1 max-w-[75%]">
            <div className="px-5 py-3 bg-primary text-white rounded-2xl rounded-br-none text-[15px] font-medium leading-relaxed shadow-md shadow-primary/20">
              Hi Dr. Jenkins. Since yesterday morning. She usually eats everything.
            </div>
            <span className="text-[10px] text-slate-400 font-medium mr-1 text-right">10:04 AM</span>
          </div>
        </div>

        <div className="group flex items-end gap-3 w-full animate-[fadeIn_0.5s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYfQn2kK2inkMeP5LbWRK4HNSKEkiBfYvEP58-X-hWHNmMzsACFwcEBE6g5mZLGMSkxo9Iw1CdDlaOexERTy2dQiWMFLyQ89l-_Adt1dYSLbhIyw7gtwBJZZFCig5IrFrKapjZwLoZxRhl5ZNkL_FSc4r_AzN9d-tv0d5T-wz4M5fhFbc17F-9k62tH-_r_r-HcG87g4rLl084oLfW5xYvNaRoaUM8SlRhNpwcw53o2rs9zBEyiWsO6zoSHVpsYDKjiQW1p4PhPThY")' }}></div>
          <div className="flex flex-col items-start gap-1 max-w-[75%]">
            <div className="px-5 py-3 bg-[#F3F4F6] dark:bg-[#1E2D2B] rounded-2xl rounded-bl-none text-slate-800 dark:text-slate-100 text-[15px] font-medium leading-relaxed shadow-sm">
              That is worrying. Has she been drinking water or showing any other symptoms like lethargy?
            </div>
            <span className="text-[10px] text-slate-400 font-medium ml-1">10:05 AM</span>
          </div>
        </div>
        <div className="h-4"></div>
      </main>

      <footer className="bg-white dark:bg-[#1a2c2a] px-4 py-3 border-t border-slate-100 dark:border-slate-800 z-20 shrink-0">
        <div className="flex items-end gap-3 max-w-full">
          <button aria-label="Add attachment" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-primary hover:bg-primary/10 transition-all shrink-0 active:scale-95">
            <span className="material-symbols-outlined text-[24px]">add_circle</span>
          </button>
          <div className="flex-1 bg-[#F3F4F6] dark:bg-slate-800 rounded-[24px] flex items-center min-h-[44px] px-4 py-2 transition-shadow focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white dark:focus-within:bg-slate-900">
            <textarea className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 resize-none overflow-hidden max-h-32 text-[15px] leading-6" placeholder="Type a message..." rows={1} style={{ minHeight: '24px' }}></textarea>
          </div>
          <button aria-label="Send message" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-[#248a7e] active:scale-95 transition-all shrink-0 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-[20px] translate-x-0.5 filled">send</span>
          </button>
        </div>
        <div className="h-1"></div>
      </footer>
    </div>
  );
};

export default Teleconsultation;