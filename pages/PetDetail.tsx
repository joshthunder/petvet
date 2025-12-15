import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-28 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative h-[45vh] w-full shrink-0 group/header">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMTEudzF1N2INQ69_7BeiN0dnqG3CSPk5b85KgNCDmWhiG5RnJfXyipMzTsGZxVnfLMRsu1HIj92jMv9bMK3Qjim_Ko6OxaP3o-nXx6jWaaBUZjq-zTVPUatmODu2QEFlkMg7auW6eVXUq4n2zXRB5PANfJW7VwvaKBs3OehGy3Wzp62XTOlvR1CB3sguipEZNz_UjlJP3P14zLOI9V6JnaEeRYraU3rZGLHyTgv_ujnTi2oWIEu9ImJ0Kf_Mw_WuqPDDhhwp5bi_v")' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10"></div>
        </div>
        
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 pt-12 z-20">
          <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all active:scale-95">
            <span className="material-symbols-outlined filled">favorite</span>
          </button>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
          <div className="h-1.5 w-6 rounded-full bg-white shadow-sm"></div>
          <div className="size-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
          <div className="size-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
          <div className="size-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="relative -mt-8 flex flex-col rounded-t-2xl bg-background-light dark:bg-background-dark px-6 pt-8 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">Mochi</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-1">Mixed Breed</p>
          </div>
          <button className="group flex size-12 shrink-0 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30 text-white transition-transform active:scale-90 hover:shadow-xl hover:-translate-y-0.5">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>ios_share</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-1">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>cake</span>
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Age</p>
            <p className="text-slate-900 dark:text-white text-lg font-bold">2 Yrs</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-1">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>male</span>
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Sex</p>
            <p className="text-slate-900 dark:text-white text-lg font-bold">Male</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-1">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>monitor_weight</span>
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Weight</p>
            <p className="text-slate-900 dark:text-white text-lg font-bold">5 Kg</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">My Story</h2>
          <div className="relative">
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Mochi is a bundle of joy who loves belly rubs and long walks in the park. He is a bit shy at first but warms up quickly once he gets to know you. He loves playing fetch and is very treat-motivated...
            </p>
            <button className="text-primary font-bold text-sm mt-2 hover:underline">Read more</button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Health &amp; Traits</h2>
          
          <div className="flex flex-col gap-4">
            {/* Medical Info */}
            <div className="rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-800">
               <div className="flex items-center gap-2.5 mb-4">
                  <div className="size-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>health_and_safety</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">Medical Status</h3>
               </div>
               
               <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Vaccinations</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Up to Date</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Spayed/Neutered</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Yes</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Microchipped</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Yes</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Worming</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Up to Date</span>
                    </div>
                  </div>
               </div>
               
               <div className="rounded-xl bg-orange-50 dark:bg-orange-900/20 p-3 flex gap-3 items-start border border-orange-100 dark:border-orange-800/30">
                  <span className="material-symbols-outlined text-orange-500 shrink-0 mt-0.5" style={{ fontSize: '20px' }}>info</span>
                  <div>
                    <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-0.5">Special Needs</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Sensitive stomach. Requires grain-free diet to prevent digestive issues.</p>
                  </div>
               </div>
            </div>

            {/* Temperament */}
            <div className="rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-800">
               <div className="flex items-center gap-2.5 mb-4">
                  <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>psychology</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">Temperament & Behavior</h3>
               </div>
               
               <div className="flex flex-wrap gap-2 mb-4">
                 {['Good with Kids', 'House Trained', 'High Energy', 'Playful', 'Smart'].map((trait, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-transparent">
                      {trait}
                    </span>
                 ))}
               </div>
               
               <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-primary/30 pl-3">
                 "Mochi is incredibly smart and learns tricks very fast. He needs a lot of mental stimulation and loves puzzle toys. He gets along well with other dogs but can be shy with cats."
               </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Shelter Info</h2>
          <div className="flex items-center justify-between rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => navigate('/shelter/1')}>
            <div className="flex items-center gap-4">
              <div className="size-14 overflow-hidden rounded-full bg-gray-100 shrink-0">
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1TugR8P8TCam1g7_ztE9lvESW1g7urE5FQx3F5uUIUaJTYh4eosKyHQSnfh_qZnD1iLBOKcFvcGazx0Wwpt70hCDf42iIxhZAXli-oqw2rp9D5CQrat-GVCHxFjuTnEJrqjTN9O7juGNs8Ay6qf6RS48_8c-kPT9d7_99b9GrBuyTD_LqGZQhY-2xknqUeCCufKWPzQboksAfqdn1onegt7SaK1jgN_YPMNXHqULhTGh-CmhIWqo33r2KqeTMmJ4hUuQBtZrKJjuT"/>
              </div>
              <div className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-base font-bold line-clamp-1">Paws &amp; Claws Shelter</p>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
                  <p className="text-sm font-normal line-clamp-1">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="shrink-0 text-slate-300 dark:text-slate-600">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pt-4 pb-8 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="flex gap-4">
          <button className="flex-1 rounded-xl bg-primary py-4 px-6 text-center text-base font-bold text-white shadow-float shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.98]">
            Apply to Adopt
          </button>
          <button className="flex items-center justify-center rounded-xl bg-primary/10 px-4 text-primary transition-all hover:bg-primary/20 active:scale-[0.98]">
            <span className="material-symbols-outlined filled">chat_bubble</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;