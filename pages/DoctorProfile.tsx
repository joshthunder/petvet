import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#1f2b2a] shadow-sm hover:bg-gray-50 dark:hover:bg-[#2a3836] transition-colors">
          <span className="material-symbols-outlined text-[#121716] dark:text-white" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <div className="text-sm font-bold text-[#121716] dark:text-white">Doctor Profile</div>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#1f2b2a] shadow-sm hover:bg-gray-50 dark:hover:bg-[#2a3836] transition-colors">
          <span className="material-symbols-outlined text-[#121716] dark:text-white" style={{ fontSize: '24px' }}>more_horiz</span>
        </button>
      </div>

      <div className="flex flex-col items-center px-4 pt-2 pb-6">
        <div className="relative mb-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white dark:border-[#1f2b2a] shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-l06VZZ7b7avUzVm6xuL1UxZC0HilajoULMoYCeVtFbYp__dEt-tzOFhKmFx6ulZ-Tq7KSBLL5919dU_IV9ldBsrBzg1LL7eT-nE-1LA1xg2zRThX1Uq8bDYgJAapIqiDWnR2iphaIPTeDY04XNgoHx-9PRCZVgxHNyWuYT7ZnIkE6e_QupsRHgZWtILfStDbXfx36rFio52K3sK3Yn53ZaPEJklmbco3nAQec4wS5o0JXcOBvCec7opnbLyDMhzXRkM7nW-Bymqe")' }}></div>
          <div className="absolute bottom-0 right-0 bg-green-500 border-4 border-white dark:border-[#1f2b2a] w-6 h-6 rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-[#121716] dark:text-white text-center mb-1">Dr. Sarah Jenkins</h1>
        <p className="text-[#678380] dark:text-gray-400 text-base font-medium text-center mb-3">Veterinary Surgeon</p>
        <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full">
          <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
          <span className="text-primary text-sm font-bold">10 Years Exp</span>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-background-light dark:bg-background-dark">
        <div className="flex border-b border-[#dde4e3] dark:border-gray-800 px-4 justify-between">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#121716] dark:text-white pb-3 pt-2 flex-1 transition-all">
            <p className="text-sm font-bold tracking-[0.015em]">About</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#678380] dark:text-gray-500 hover:text-primary pb-3 pt-2 flex-1 transition-all">
            <p className="text-sm font-bold tracking-[0.015em]">Reviews</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#678380] dark:text-gray-500 hover:text-primary pb-3 pt-2 flex-1 transition-all">
            <p className="text-sm font-bold tracking-[0.015em]">Schedule</p>
          </button>
        </div>
      </div>

      <div className="px-4 py-5">
        <h3 className="text-lg font-bold text-[#121716] dark:text-white mb-2">Biography</h3>
        <p className="text-[#678380] dark:text-gray-300 text-base font-normal leading-relaxed">
          Dr. Sarah specializes in small animal surgery and has a passion for preventive care for cats and dogs. She is dedicated to making every pet feel safe and comfortable during their visit.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-[#121716] dark:text-white text-xl font-bold leading-tight">Select Schedule</h3>
          <div className="flex items-center gap-1 text-primary text-sm font-bold">
            <span>Oct 2023</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-2">
          <button className="flex flex-col items-center justify-center min-w-[72px] h-[84px] bg-accent rounded-[20px] shadow-md shadow-accent/20 shrink-0 transition-transform active:scale-95">
            <span className="text-white/80 text-xs font-medium mb-1">Mon</span>
            <span className="text-white text-xl font-bold">12</span>
          </button>
          {[
            { d: 'Tue', n: '13' },
            { d: 'Wed', n: '14' },
            { d: 'Thu', n: '15' },
            { d: 'Fri', n: '16' }
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center justify-center min-w-[72px] h-[84px] bg-white dark:bg-[#1f2b2a] border border-transparent dark:border-gray-800 rounded-[20px] shrink-0 text-[#121716] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3836] transition-colors active:scale-95">
              <span className="text-[#678380] dark:text-gray-500 text-xs font-medium mb-1">{item.d}</span>
              <span className="text-xl font-bold">{item.n}</span>
            </button>
          ))}
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4 my-2"></div>

        <div className="px-4">
          <h4 className="text-[#678380] dark:text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">Morning</h4>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button className="py-3 px-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2b2a] text-[#121716] dark:text-white font-semibold text-sm hover:border-primary/50 transition-colors">09:00 AM</button>
            <button className="py-3 px-2 rounded-full border border-accent bg-accent text-white font-semibold text-sm shadow-md shadow-accent/20 transition-colors flex items-center justify-center gap-1">
              10:00 AM
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
            </button>
            <button className="py-3 px-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2b2a] text-[#121716] dark:text-white font-semibold text-sm hover:border-primary/50 transition-colors">11:30 AM</button>
          </div>
          <h4 className="text-[#678380] dark:text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">Afternoon</h4>
          <div className="grid grid-cols-3 gap-3">
            <button className="py-3 px-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#1a2423] text-gray-400 dark:text-gray-600 font-semibold text-sm cursor-not-allowed decoration-slice">02:00 PM</button>
            <button className="py-3 px-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2b2a] text-[#121716] dark:text-white font-semibold text-sm hover:border-primary/50 transition-colors">03:30 PM</button>
            <button className="py-3 px-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2b2a] text-[#121716] dark:text-white font-semibold text-sm hover:border-primary/50 transition-colors">04:00 PM</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-[#131f1e]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 p-4 pb-8 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto right-0">
        <button className="w-full bg-primary hover:bg-teal-600 active:bg-teal-700 text-white font-bold text-lg h-14 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98]" onClick={() => navigate('/consultation/1')}>
          <span>Book Consultation</span>
          <span className="w-1 h-1 bg-white/50 rounded-full mx-1"></span>
          <span>Rp 50.000</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;