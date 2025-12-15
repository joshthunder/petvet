import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDirectory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-6 pt-12 pb-4 bg-background-light dark:bg-background-dark z-10 sticky top-0">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-main dark:text-white">
          <span className="material-symbols-outlined text-[28px]">arrow_back</span>
        </button>
        <h1 className="text-xl font-extrabold tracking-tight flex-1 text-center pr-8">Find a Specialist</h1>
        <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-main dark:text-white">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-background-light dark:border-background-dark"></span>
        </button>
      </header>

      <div className="px-6 py-2">
        <div className="flex w-full items-center rounded-full bg-white dark:bg-surface-dark h-12 shadow-sm border border-transparent focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <div className="flex items-center justify-center pl-4 text-primary">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </div>
          <input className="flex w-full bg-transparent border-none focus:ring-0 text-base font-medium text-text-main dark:text-white placeholder:text-text-secondary h-full px-3" placeholder="Find a vet or symptom..." type="text"/>
          <button className="flex items-center justify-center pr-4 text-text-secondary">
            <span className="material-symbols-outlined text-[24px]">tune</span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto hide-scrollbar py-4 pl-6">
        <div className="flex gap-3 pr-6 min-w-max">
          {['All', 'Cats', 'Dogs', 'Surgery', 'Nutrition', 'Dental'].map((cat, i) => (
            <button key={i} className={`flex h-9 items-center justify-center px-5 rounded-full ${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white dark:bg-surface-dark text-text-secondary dark:text-gray-300 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-all`}>
              <span className="text-sm font-bold">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 pb-6 overflow-y-auto">
        <h3 className="text-lg font-bold text-text-main dark:text-white mt-2 mb-1">Recommended Vets</h3>
        
        <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-gray-800 hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/specialists/1')}>
          <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPda9TOGPfZbKcV5FJrkxNt4gVtRMblYXVTdll0-IJ17i60YckmbDNKh0qh56CiLBJmhy7iH_fZqNXaHWfHDSTWL8G5XqAqtgr96U1qw5fjOvX7U2WwAbrPpIDc5fI6X4n6iPcmtr3nvTbVtfT4eYZKymtXkvaWKww6WUZ764Cl8GVfWjdNqvQ7Zv-97y_WefwtX3nDl2iZR9C3tmhN65yRnrfw_EciNaWkqCFK-NQCUGZUbh7NnXKYKjXIq3AdvWoAOK3d4ibPT0p")' }}></div>
            <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <p className="text-text-main dark:text-white text-base font-bold leading-tight truncate pr-2">Dr. Sarah Jenkins</p>
              <span className="shrink-0 text-primary font-bold text-sm">Rp 50k</span>
            </div>
            <p className="text-text-secondary dark:text-gray-400 text-sm font-medium leading-normal truncate mb-1">General Vet</p>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-yellow-400 text-[16px] filled">star</span>
              <span className="text-text-main dark:text-gray-200 text-xs font-bold">4.9</span>
              <span className="text-text-secondary dark:text-gray-500 text-xs">(120 reviews)</span>
            </div>
          </div>
          <div className="shrink-0 self-center">
            <button className="flex items-center justify-center rounded-full h-9 px-5 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
              Book
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-gray-800 hover:shadow-md transition-shadow">
          <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpiksOadcaFaPSLb8tMX3ZCZaDQCVsoR-vk1qYNWSoepOQj1g71eTjZh9GfPZydEe7vnAZIbaJOZxQl8wT6VExSnk7od3ga0Mc_WZOh9L23ySSjh4Qw2gKY4aAZNJUVUBtTFprRt16dTYTih8BPZmaaYVLeXwtF9EnL6E3gRR2U65Ee9Ga6AR3Hx3E_v-D9TGXW_ghg1sCGnphr6zsl1LogP_S6KMOusSajtkLhbl1C2DonoxkRyxSfjqIJseb_UvqI1_7n_p9lS5r")' }}></div>
            <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <p className="text-text-main dark:text-white text-base font-bold leading-tight truncate pr-2">Dr. Budi Santoso</p>
              <span className="shrink-0 text-primary font-bold text-sm">Rp 75k</span>
            </div>
            <p className="text-text-secondary dark:text-gray-400 text-sm font-medium leading-normal truncate mb-1">Surgery Specialist</p>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-yellow-400 text-[16px] filled">star</span>
              <span className="text-text-main dark:text-gray-200 text-xs font-bold">4.8</span>
              <span className="text-text-secondary dark:text-gray-500 text-xs">(85 reviews)</span>
            </div>
          </div>
          <div className="shrink-0 self-center">
            <button className="flex items-center justify-center rounded-full h-9 px-5 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
              Book
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-6 pt-3 px-6 z-20 max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => navigate('/dashboard')}>
            <span className="material-symbols-outlined text-[24px]">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[24px] filled">medical_services</span>
            <span className="text-[10px] font-bold">Vets</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <span className="text-[10px] font-bold">Appts</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => navigate('/profile')}>
            <span className="material-symbols-outlined text-[24px]">person</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDirectory;