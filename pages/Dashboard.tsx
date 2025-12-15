import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32 bg-background-light dark:bg-background-dark transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 transition-all">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => navigate('/profile')}>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <img alt="User Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wKwtqkGRB8LKb8MwEDdNzJVPwilhon8VDr3ZLug5oKaGZkpeoLZLqZoYaTnF3WFDee4zNEpreqEeOR1oO9hGm-KSV1FAOcVCamBrjTMYQRRdfhZ34lm6KSBt5aKM9QuHbxw3z2XLswy79N9mDGNFrFrcSio6MAa9udh6yuTgTRQ0_p9R3iICZgfbNUsZYck-FU_BD7QUcRkUDEwJ-WL-1Eja38q-B7EqOokiqN410Qco7sQ2LS1BqtICsiYUMmVT4FxYKothQc5W"/>
            </div>
          </div>
          <h1 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
            Hi, Joshua & Mochi!
          </h1>
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm transition-transform active:scale-95">
          <span className="material-symbols-outlined text-gray-700 dark:text-gray-200">notifications</span>
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-800"></span>
        </button>
      </header>

      {/* Hero Widget: Pet Health Card */}
      <section className="px-6 py-2">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#4BC0B2] shadow-soft">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative flex flex-col gap-6 p-6">
            <div className="flex items-start justify-between">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 shadow-inner">
                <img alt="Pet Mochi" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy197QocGulB5eMY2AsijY0aDYQxvBDgq21QwS1wliNrHPbQWvbvszIjXvPRwqLHXXZFiTSMkIg7kV67A_mN03ebpq4Jg5UfDhZfyg2Atcl3c4ncc6xBHSWKcDCRKMt2cN86k76i6chn8gOsl5UiVhTQnXsNeIMBu1lElU4UZc2W-DQhpofcF0dKIzN_aYrGCJWvd8WUrbJkeq5TJkN1044PyWSelLEtpQEfuDlKa6LpTU-pojS5T-HgF_uZhaQnAVweobQmnGZCs-"/>
              </div>
              <div className="flex flex-1 flex-col items-end text-right gap-1 pl-4">
                <div className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                  <span className="text-xs font-bold text-white tracking-wide uppercase">Urgent</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-white leading-tight">Vaccine<br/>Reminder</h2>
                <p className="text-white/90 font-medium text-lg">2 Days Left</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="text-white font-bold text-sm">Health Score</span>
                <span className="text-white font-bold text-lg">95%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-black/10 backdrop-blur-sm overflow-hidden">
                <div className="h-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="mt-6 px-6">
        <div className="grid grid-cols-4 gap-4">
          <button className="group flex flex-col items-center gap-2" onClick={() => navigate('/specialists')}>
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-active:scale-95 group-hover:shadow-md">
              <span className="material-symbols-outlined text-3xl text-primary">stethoscope</span>
            </div>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Consult</span>
          </button>
          
          <button className="group flex flex-col items-center gap-2" onClick={() => navigate('/shop')}>
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-active:scale-95 group-hover:shadow-md">
              <span className="material-symbols-outlined text-3xl text-accent-orange">shopping_bag</span>
            </div>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Shop</span>
          </button>
          
          <button className="group flex flex-col items-center gap-2" onClick={() => navigate('/adopt')}>
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-active:scale-95 group-hover:shadow-md">
              <span className="material-symbols-outlined text-3xl text-primary">pets</span>
            </div>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Adopt</span>
          </button>
          
          <button className="group flex flex-col items-center gap-2" onClick={() => navigate('/clinics')}>
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-active:scale-95 group-hover:shadow-md">
              <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
            </div>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Clinics</span>
          </button>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="mt-8 flex flex-col gap-4">
        <div className="flex items-center justify-between px-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recommended for Mochi</h3>
          <button className="text-sm font-semibold text-primary" onClick={() => navigate('/shop')}>See All</button>
        </div>
        <div className="flex w-full gap-4 overflow-x-auto px-6 pb-4 no-scrollbar snap-x">
          <div className="flex min-w-[200px] snap-center flex-col gap-3 rounded-2xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700" onClick={() => navigate('/shop/1')}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
              <div className="absolute right-2 top-2 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-800 backdrop-blur-sm">Nutrition</div>
              <img alt="Dog Food" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRE1mjqbLttIFxdnDaKYZjnfFMxGdwZSSPjcXG5zVRNva9bI7bs_Tg5MewKfRm0BHTbsEAIfg4lR14ylsah195M-P5vVcF_OsSf9f15aiC5gYwjYjKgvqgvF3E6O3IwlrvxclAZqROtzC4q7i3KQUVPCrrJaccya3TBqvcse3XBImjhD_wqcOSTfB_pGkFasHPMGkLQWZDKD93yWpq8vMrLgHrrqkM5Tm6vmKiOYUiiPNu9aA2KxzkbtOVzZndQYdMWKpUsSe2nSmr"/>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">Premium Organic Kibble</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">High protein for growth</p>
            </div>
          </div>
          
          <div className="flex min-w-[200px] snap-center flex-col gap-3 rounded-2xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
              <div className="absolute right-2 top-2 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-800 backdrop-blur-sm">Toy</div>
              <img alt="Dog Toy" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Po02DhY0Zd2a75le_1pVyCXWU-brh49kochfHYGbacc_uKfpD6SiLHL_cgf_1xcDu0Ek9utWNfx4c9nNyqgO0Z9tMVfSSEybaKDfX6Hu-QKiXRufOQAysoGKUoNaNu_L3CiLHdYbjUTzCQNMRvw2Gj2XHWShDFNynHuudbnbmwFesI4Usr8F9iGKYjubQjuain4ko1D_7PKek9h-5uL0gh74ni8XHJbRB07ykpS00ENiMvzqI_ButKTqzg29BiGPMmW8K4m0Dc1I"/>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">Indestructible Chew Toy</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Great for teeth health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-3rem)] max-w-[400px] -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 shadow-nav p-2">
        <nav className="flex items-center justify-between px-2">
          <button className="flex flex-col items-center gap-1 p-2 text-primary">
            <span className="material-symbols-outlined filled">home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" onClick={() => navigate('/chat')}>
            <span className="material-symbols-outlined">forum</span>
          </button>
          <div className="relative -top-6">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg ring-4 ring-background-light dark:ring-background-dark transition-transform active:scale-95">
              <span className="material-symbols-outlined text-3xl text-white">document_scanner</span>
            </button>
          </div>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" onClick={() => navigate('/shop')}>
            <span className="material-symbols-outlined">storefront</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" onClick={() => navigate('/profile')}>
            <span className="material-symbols-outlined">person</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;