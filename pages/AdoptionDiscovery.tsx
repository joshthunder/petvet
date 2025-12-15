import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdoptionDiscovery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col bg-background-light dark:bg-background-dark font-display text-[#181211] dark:text-white transition-colors duration-300">
      <header className="flex-none pt-12 pb-2 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>pets</span>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Pet Wise</h1>
        </div>
        <button className="flex items-center justify-center p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">tune</span>
        </button>
      </header>

      <div className="flex-none w-full overflow-x-auto hide-scrollbar px-6 pb-4 pt-1 z-10">
        <div className="flex gap-3">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-md shadow-primary/20 transition-transform active:scale-95">
            <span className="text-sm font-bold">Dogs</span>
          </button>
          {['Cats', 'Near Me', 'Puppies'].map((filter, i) => (
            <button key={i} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-5 border border-gray-100 dark:border-gray-700 shadow-sm transition-transform active:scale-95">
              <span className="text-sm font-medium">{filter}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 relative w-full px-4 pb-24 flex flex-col justify-center">
        <div className="absolute top-[2%] left-8 right-8 bottom-[105px] bg-white dark:bg-gray-700 rounded-[32px] shadow-sm opacity-60 scale-95 origin-bottom transition-all"></div>
        <div className="absolute top-[1%] left-6 right-6 bottom-[100px] bg-gray-100 dark:bg-gray-800 rounded-[32px] shadow-md opacity-80 scale-[0.98] origin-bottom transition-all"></div>

        <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-2xl elevation-5 transform transition-all cursor-pointer group" onClick={() => navigate('/adopt/1')}>
          <img alt="Golden Retriever" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtzv8oz6EwzB8hhdGb7dvBhsoc_2JheGSjJvlLXRD_YM07HgAVosAc7zqNAf_sUOwINO4782Zl2XYh7P7zdok0T2g-60ns1e9UTICYAEZ7TBnZHVv1W0_-1LXGEUoQqbZZ4BQEKYA375hF3sLR5hWtU_i-AuFY-LS9H-Pi7RpruO9O3ITxc7lPBmA5jJvYYfIOmhFgKzALBHB1-ruNa5AXj_1CVk6GehWyHsWyFW5zjZMyjHGDctcSM9b7TJ-dcp6-CUw48kOpHt7w"/>
          
          <button className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white z-20 hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined">info</span>
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-full p-6 pb-8 z-20 text-white flex flex-col items-start gap-3">
            <div className="space-y-1">
              <div className="flex items-end gap-3">
                <h2 className="text-4xl font-extrabold tracking-tight leading-none shadow-black drop-shadow-lg">Barnaby</h2>
                <span className="text-lg font-medium text-gray-200 mb-1 opacity-90">2 yrs</span>
              </div>
              <p className="text-base text-gray-200 font-medium opacity-90">Golden Retriever • Male • 5 miles away</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm border border-white/10 shadow-lg">
                <span className="material-symbols-outlined text-white text-[16px]">vaccines</span>
                <span className="text-xs font-bold tracking-wide uppercase">Vaccinated</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="material-symbols-outlined text-white text-[16px]">sentiment_satisfied</span>
                <span className="text-xs font-bold tracking-wide uppercase">Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="material-symbols-outlined text-white text-[16px]">home</span>
                <span className="text-xs font-bold tracking-wide uppercase">House Trained</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 w-full flex items-center justify-center gap-8 z-30 px-4">
          <button className="group flex items-center justify-center size-16 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-90">
            <span className="material-symbols-outlined text-gray-400 group-hover:text-red-500 transition-colors text-4xl">close</span>
          </button>
          <button className="group flex items-center justify-center size-20 rounded-full bg-primary shadow-xl shadow-primary/40 hover:bg-red-500 transition-all active:scale-90 transform hover:-translate-y-1">
            <span className="material-symbols-outlined text-white fill-current text-[40px] group-hover:scale-110 transition-transform filled">favorite</span>
          </button>
          <button className="group flex items-center justify-center size-14 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-90">
            <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform">star</span>
          </button>
        </div>
      </main>

      <nav className="flex-none h-[88px] bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex justify-around items-start pt-4 px-2 pb-8 z-40 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
        <button className="flex flex-col items-center gap-1 w-16 group text-primary">
          <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform filled">home</span>
          <span className="text-[10px] font-bold">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1 w-16 group text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">favorite</span>
          <span className="text-[10px] font-medium">Favorites</span>
        </button>
        <button className="flex flex-col items-center gap-1 w-16 group text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">chat_bubble</span>
          <span className="text-[10px] font-medium">Messages</span>
        </button>
        <button className="flex flex-col items-center gap-1 w-16 group text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" onClick={() => navigate('/profile')}>
          <div className="size-6 rounded-full bg-gray-200 overflow-hidden">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi2J14YHCVsQMZC0AIDGga_QBDCLQv5m2OuXCHPlgRHr2U6Txs9kPA7nA21tiOMq0DKtFbzwQjvSpYd7k1E2WfONTSnAIdgvK24tp_EoklvMcSxQSM4rNmGBuJe5coSAQYBd-hRXt6UjrHdRfbW04kTxG1AJVDhby5HU7P43OTvUJKsdsWWMlLBf6NYH_cArQB3B2EUnn-DDRC_MThFdoUqx9mjxnHqOZjCfkfesCIiJPWACQcToc2gMdPsOg29tty9O4O6WMMYLVn"/>
          </div>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default AdoptionDiscovery;