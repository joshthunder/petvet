import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClinicLocator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen overflow-hidden flex flex-col font-inter">
      <div className="relative flex-1 w-full bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-80 dark:opacity-60 mix-blend-multiply dark:mix-blend-normal" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaSW6WCg1yj6pI9ugZs6vShPvb1j_x1STEwtIGcxrVT5HT0aHGRotRE64i5-hiqtpzbc4ghz5aiH2F-Ch9LHlUaQW8V2vRPCVgiycUQe6-46lSNqnLq3GSaY3A2QLIin0448xXdCoIJGfQTJxKt-hy71fUIvIxt9UENLWYKCGWrMtyMnaIhg243o5KdKv9HkyjvzYLKIgRJA1jnmB6lRntsr75i5l3pAugADNJmOGYnL-UIPlk9ULgNPHILOjPwhHjwLONdR8kRdCG")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent dark:from-black/60 pointer-events-none"></div>
        
        <div className="absolute top-12 left-4 right-4 z-20">
          <div className="flex flex-col h-12 w-full shadow-lg rounded-xl">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-white dark:bg-gray-800">
              <button onClick={() => navigate('/dashboard')} className="text-[#678381] flex border-none items-center justify-center pl-4 rounded-l-xl border-r-0 hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
              </button>
              <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#678381] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search area..." defaultValue=""/>
              <div className="flex items-center pr-2">
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tune</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {[{ top: '35%', left: '20%' }, { top: '50%', right: '25%' }, { bottom: '40%', left: '45%' }].map((pos, i) => (
          <div key={i} className="absolute z-10 group cursor-pointer hover:scale-110 transition-transform duration-200" style={pos} onClick={() => navigate('/clinics/1')}>
            <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-full">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.3)] border-2 border-white dark:border-gray-800 relative z-20">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>add</span>
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-primary border-r-[8px] border-r-transparent -mt-1 z-10"></div>
              <div className="w-4 h-1.5 bg-black/20 rounded-[100%] blur-[2px] mt-0.5"></div>
            </div>
          </div>
        ))}

        <div className="absolute top-[60%] left-[30%] flex items-center justify-center z-0">
          <div className="w-16 h-16 bg-blue-500/30 rounded-full animate-pulse absolute"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md relative z-10"></div>
        </div>
      </div>

      <div className="relative flex-1 bg-white dark:bg-gray-900 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] -mt-6 z-30 flex flex-col w-full">
        <div className="w-full pt-3 pb-1 flex justify-center cursor-grab active:cursor-grabbing">
          <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <div className="px-5 pb-2 pt-2 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Nearby Clinics</h1>
          <button className="text-xs font-semibold text-primary uppercase tracking-wide">View All</button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-24 space-y-4 hide-scrollbar">
          {[
            { name: 'Paws & Claws Vet', dist: '0.8 km', rating: '4.8', reviews: '120', status: 'Open Now', statusColor: 'green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl1kFwVs6H6z0K1ngusRv8WB4_MqrLnlQplgUFrk0P97FX1aKx0MnDL-PwWk4tTOupWAu8Jqvy_ESsEb5RF2jBz3xupBrRxte9czJ7f0i3lO4JdoPbJtmzjcWSsLkb2fgNWHkvaIPpOKc2_XCP9_hfx4yOvhGipyTdBzAD-kbv4ij0Gkh2_UoKUazTWY4yB6CbGxsapBEROSHPcEk5CgoszOFNyAaYi8a4qQiMnehvt74bt2FBZL-GBIvwaMzwFAi2TVqO-O5SGXH8' },
            { name: 'City Pet Hospital', dist: '1.2 km', rating: '4.5', reviews: '85', status: 'Closing Soon', statusColor: 'orange', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw4lPhoNKEaf1laTh3qaOa6eLcTRnWo5GivcVqdNeADfTyYTI0ffYzdRrovZzsznwgAYLvMHXUqgnkUaLvvp5ELy2-hQi_D2rtUyair_o-8RyLjeCyhOo_AHrnXouH3jJTEi3UKLuMaD9ofMflDhIr4VGKq_V9mFSPby0xvwoSjbKZAGmX065v4prD633vplBnB0zbq0zux416MSdllf9KLXgjJasfYv4gkaGxvwdCsfOJSjHGY_d91tRBGam4X-wQBlVIjQ2JeHOQ' },
            { name: 'Emergency Care', dist: '2.5 km', rating: '4.9', reviews: '200', status: 'Open 24/7', statusColor: 'green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzJ5mv67-I5CXvQyVUSqHqTmii6v0R4SxDs-m4lfbhwa5UQC6UB7fIXAHVjjfuZn_19TWyZOUfkq8DjBG7ix9UavE5aaenJmezig2jc6AVX9-ehgjsu3j1mYoVgS2hRRxaDSjM7dKs0H_T-sFTJdNzPYgJ5EqtIukthRwjhh8lRnQ-5SUnR8ij0lgYln5fPrOqgK_j3msIBC2XmP-ykwN1GbT3_TsD3fmoJ__N2bv2WEu0bvwzDIqABKF9GcOfd99o0XyHN4RGWoIY' }
          ].map((clinic, i) => (
            <div key={i} className="group flex flex-col bg-background-light dark:bg-gray-800 rounded-xl p-3 border border-transparent hover:border-primary/20 transition-all shadow-sm cursor-pointer" onClick={() => navigate('/clinics/1')}>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 rounded-lg bg-gray-200 overflow-hidden relative">
                  <img className="w-full h-full object-cover" src={clinic.img} alt={clinic.name} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white truncate">{clinic.name}</h2>
                    <span className="text-coral font-bold text-sm whitespace-nowrap">{clinic.dist}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center text-yellow-500">
                      <span className="material-symbols-outlined fill-current" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-1 font-semibold text-slate-900 dark:text-white">{clinic.rating}</span>
                      <span className="ml-1 text-gray-400 font-normal">({clinic.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${clinic.statusColor === 'green' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400'}`}>
                      {clinic.status}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-50">
        <button className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>chat</span>
        </button>
      </div>
    </div>
  );
};

export default ClinicLocator;