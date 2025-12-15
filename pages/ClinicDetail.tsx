import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClinicDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display text-[#121716] dark:text-gray-100 antialiased">
      <div className="relative w-full h-72">
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFwwnLNS8bA0EZyK0jZsH4DKstv1gjqvC6s-jcZU-Xq8iA1wfeXVIH56AFqOD-EAh5iLN9JhBy6AZJwUjs1ohfOGqZKO6fAwINRVN-CgMf3xPJRqmoRXI9FBcfL9Tgewga048m52H54yJ1kmhFrYEMlIOYMCbQZP_rF9Wg0AF-sYhmaoXyJYhv7XMTJfHRnWj45jgxy8rPHG7VDyGZnvbwloK6LGFEiglupMtYdy4K9I8EWkyIgNgrR4W55OUxIG1wLLFNzJV9V5SS")' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-full p-4 pt-12 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="h-10 w-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-sm text-gray-800 hover:bg-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="h-10 w-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-sm text-gray-800 hover:bg-white transition-colors">
            <span className="material-symbols-outlined">favorite_border</span>
          </button>
        </div>
      </div>

      <div className="relative -mt-6 rounded-t-3xl bg-background-light dark:bg-background-dark px-6 pt-8">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Healthy Paws Vet Center</h1>
            <div className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider">4.8 ★</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Open • Closes at 20:00</p>
          </div>
        </div>
        <div className="h-px w-full bg-gray-200 dark:bg-gray-800 mb-6"></div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Location</h3>
            <button className="text-primary text-sm font-semibold hover:text-primary/80">Get Directions</button>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#1C2A29] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full h-32 bg-center bg-cover bg-no-repeat relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz5MBAmgGxpcSRUN8-093e2EIq2op9zpzkezIb_YI-YPieT3zlaf4t0SXh9MRpUul0DequUANssFn2TpSYPqquRevKYPHNSJj7-zLEz8PsUo2LwqcR65D1TAZwKd5MgYsW5aO3Ak0uVjz8TCin1cx-Z8jAFiHGHNyxLa4tjFlo9jf9MvxtNgrMby7FHwgBB9zy7cArstFrBP1AIo5c93J4HVvJf0oAtlY3XtoCJuj6JwR3kiM45CP81LKpDlFIGpOHRHm24pH9vmEg")' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-md">location_on</span>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-coral">near_me</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 dark:text-white">1234 Puppy Lane</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Barktown, CA 90210</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
            <div className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-full shadow-md shadow-primary/20 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px]">medical_services</span>
              <span className="text-sm font-medium">Surgery</span>
            </div>
            {[{ icon: 'vaccines', label: 'Vaccine' }, { icon: 'pets', label: 'Grooming' }, { icon: 'radiology', label: 'X-Ray' }].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white dark:bg-[#1C2A29] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-full whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About Us</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Healthy Paws Vet Center provides comprehensive veterinary care for your beloved pets. Our state-of-the-art facility is equipped to handle everything from routine check-ups to complex surgeries.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1C2A29] border-t border-gray-100 dark:border-gray-800 px-6 py-4 pb-8 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto right-0">
        <div className="flex items-center gap-4 w-full">
          <button className="h-14 w-14 flex items-center justify-center rounded-xl border-2 border-gray-100 dark:border-gray-700 text-coral hover:bg-coral/5 transition-colors active:scale-95">
            <span className="material-symbols-outlined">call</span>
          </button>
          <button className="h-14 flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">chat_bubble</span>
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;