import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-background-light dark:bg-background-dark min-h-screen">
      <header className="flex items-center justify-between px-6 pt-12 pb-4 bg-background-light dark:bg-background-dark z-10 sticky top-0">
        <div className="w-10 h-10 flex items-center justify-start cursor-pointer hover:opacity-70 transition-opacity" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined !text-[28px]">arrow_back</span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight text-[#121716] dark:text-white">Profile</h1>
        <div className="w-10 h-10 flex items-center justify-end"></div>
      </header>

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-10">
        <section className="flex flex-col items-center px-6 pt-2 pb-8">
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden shadow-sm border-4 border-white dark:border-background-dark bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUEUOF-PvD6VquMVCui2zKxn5V7kFHlHiUcS26rlpybAe1eZUzhZnKZrOnzMc5JqNcNEUX5e24D_jMMQzyTfDu2SCrj8wntNnmnkCZBhebr9GBqWNiOTOe7bKGi6VqI9H3gAaALMQYo3tleSJET0uISw2JLlKuNd45BBBzPFSaqVg3KlNs-lqpiRRwyiUNMZJV-FmXNrGJRwOtYy-gLQY5tOuhx1PT6ECd9GjHhTBCT2Plq-GJZ91IAwlpetLQyBahSNEE4patjDKZ")' }}></div>
            <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 border-[3px] border-white dark:border-background-dark flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined !text-[14px] font-bold">edit</span>
            </div>
          </div>
          <div className="mt-4 text-center space-y-1">
            <h2 className="text-2xl font-bold text-[#121716] dark:text-white tracking-tight">Joshua</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">joshua@example.com</p>
          </div>
          <button className="mt-6 px-6 py-2.5 rounded-full border border-primary text-primary dark:text-primary dark:border-primary bg-transparent hover:bg-primary/5 active:bg-primary/10 transition-colors font-bold text-sm tracking-wide w-full max-w-[200px]">
            Edit Profile
          </button>
        </section>

        <section className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#121716] dark:text-white">My Pets</h3>
            <button className="text-primary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar py-1">
            <div className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="w-[72px] h-[72px] rounded-full p-[3px] border border-primary/20">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdRtvby-k7zITzhdeAJhyk78kioL82mSFk-tNanv81qLPaVfKWiLvoOAC2A8HsQ7C-jtqZZs5Wgn15rnWTLu0BPKIDXNTfi2wbLFONX7U11QVHKoIHQuo_1EU8h52UA_QgFOGtx0eoSARm8G1BkozPDPFnoXdk8PBMCwOv19S9xdCGr_F9S5iZC9CyxDmz-iU4042pIFxa3oRwrAbTB39icOXuKFNMY_3zQKZyMVEghpfu-hhInZ_Svz_LiWP8YqoPE5BhFazcnZY5")' }}></div>
              </div>
              <span className="text-xs font-semibold text-[#121716] dark:text-gray-300">Max</span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="w-[72px] h-[72px] rounded-full p-[3px] border border-transparent">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC406rMn7Cos-g_dRW2x8CSH8Ketx9XEXwVfyX8v61nNoFhfPgLPOyNSBUgZzFFIpq6fu1qn-r0_ztG186fXEXIz9njDpqjTpbceeW0y4SfhChdHUEOQY-b6JLSjuFfNag6NiBGqJEDA5xSsOz7EXgcQFUt905kvtx97wBpSv6gVMtSWcK6T_GEbPmZ-RmdET8-Wct1yNDmU2-gTtmppRQemeeKU_Prktr8Kpdw5UthAkpqzAvb0nwAjFhINpoY8RZ4T8xCjUqBVf5k")' }}></div>
              </div>
              <span className="text-xs font-semibold text-[#121716] dark:text-gray-300">Luna</span>
            </div>
            <button className="flex flex-col items-center gap-2 min-w-[72px] group">
              <div className="w-[72px] h-[72px] rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-transparent group-hover:bg-gray-50 dark:group-hover:bg-surface-dark transition-colors">
                <span className="material-symbols-outlined text-primary !text-[28px]">add</span>
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-primary transition-colors">Add</span>
            </button>
          </div>
        </section>

        <div className="space-y-6 px-6">
          <div className="flex flex-col space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2 mb-1">General</h4>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined filled !text-[20px]">person</span>
                  </div>
                  <span className="text-[15px] font-medium text-[#121716] dark:text-white">Personal Information</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 !text-[20px]">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined filled !text-[20px]">credit_card</span>
                  </div>
                  <span className="text-[15px] font-medium text-[#121716] dark:text-white">Payment Methods</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 !text-[20px]">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined filled !text-[20px]">location_on</span>
                  </div>
                  <span className="text-[15px] font-medium text-[#121716] dark:text-white">Saved Addresses</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 !text-[20px]">chevron_right</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2 mb-1">Support &amp; About</h4>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined filled !text-[20px]">help</span>
                  </div>
                  <span className="text-[15px] font-medium text-[#121716] dark:text-white">Help Center &amp; FAQ</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 !text-[20px]">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined filled !text-[20px]">support_agent</span>
                  </div>
                  <span className="text-[15px] font-medium text-[#121716] dark:text-white">Customer Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-coral bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">24/7</span>
                  <span className="material-symbols-outlined text-gray-400 !text-[20px]">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 pb-4">
            <button className="flex items-center gap-2 text-red-500 hover:text-red-600 active:text-red-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined !text-[20px]">logout</span>
              Log Out
            </button>
            <p className="text-[10px] text-gray-400 mt-4 tracking-wide">App Version 1.0.2</p>
          </div>
        </div>
      </main>

      <nav className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-10 safe-pb">
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" onClick={() => navigate('/dashboard')}>
          <span className="material-symbols-outlined !text-[24px]">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined !text-[24px]">pets</span>
          <span className="text-[10px] font-medium">My Pets</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined !text-[24px]">calendar_month</span>
          <span className="text-[10px] font-medium">Bookings</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined filled !text-[24px]">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default UserProfile;