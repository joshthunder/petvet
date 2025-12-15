import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-10 shadow-sm font-body">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[18px]">pets</span>
          </div>
        </div>
        <div className="size-12"></div>
      </div>

      <div className="flex flex-col px-6 pt-2 pb-8">
        <h1 className="text-text-main dark:text-white tracking-tight text-[32px] font-bold leading-[1.15] pb-3 text-center">Join the Pet Wise Family</h1>
        <p className="text-text-muted dark:text-gray-400 text-base font-normal leading-relaxed text-center max-w-xs mx-auto">Your pet's health journey starts here.</p>
      </div>

      <form className="flex flex-col gap-5 px-6 w-full" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
        <div className="flex flex-col gap-1">
          <div className="relative flex items-center group">
            <input className="peer flex w-full items-center rounded-full border border-[#dde4e3] dark:border-gray-700 bg-white dark:bg-white/5 px-6 h-14 text-base text-text-main dark:text-white placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Full Name" type="text"/>
            <span className="material-symbols-outlined absolute right-5 text-text-muted peer-focus:text-primary transition-colors pointer-events-none">person</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative flex items-center group">
            <input className="peer flex w-full items-center rounded-full border border-[#dde4e3] dark:border-gray-700 bg-white dark:bg-white/5 px-6 h-14 text-base text-text-main dark:text-white placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Email Address" type="email"/>
            <span className="material-symbols-outlined absolute right-5 text-text-muted peer-focus:text-primary transition-colors pointer-events-none">mail</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative flex items-center group">
            <input className="peer flex w-full items-center rounded-full border border-[#dde4e3] dark:border-gray-700 bg-white dark:bg-white/5 px-6 h-14 text-base text-text-main dark:text-white placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Password" type="password"/>
            <button className="absolute right-5 text-text-muted hover:text-primary transition-colors flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10" type="button">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative flex items-center group">
            <input className="peer flex w-full items-center rounded-full border border-[#dde4e3] dark:border-gray-700 bg-white dark:bg-white/5 px-6 h-14 text-base text-text-main dark:text-white placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Confirm Password" type="password"/>
            <button className="absolute right-5 text-text-muted hover:text-primary transition-colors flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10" type="button">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-3 px-2 py-1">
          <div className="relative flex items-center mt-0.5">
            <input className="peer size-5 cursor-pointer appearance-none rounded-[6px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-2 focus:ring-primary/20" id="terms" type="checkbox"/>
            <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 pointer-events-none peer-checked:opacity-100 transition-opacity font-bold">check</span>
          </div>
          <label className="cursor-pointer text-sm text-text-muted dark:text-gray-400 leading-snug select-none" htmlFor="terms">
            I agree to the <a className="text-primary font-bold hover:underline decoration-2" href="#">Terms of Service</a> and <a className="text-primary font-bold hover:underline decoration-2" href="#">Privacy Policy</a>
          </label>
        </div>

        <div className="pt-4">
          <button type="submit" className="group w-full rounded-full bg-coral hover:bg-[#d85c40] active:scale-[0.98] text-white h-14 text-lg font-bold tracking-wide shadow-lg shadow-coral/30 hover:shadow-coral/40 transition-all flex items-center justify-center gap-2">
            Create Account
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </form>

      <div className="mt-auto pt-10 text-center pb-6">
        <p className="text-text-muted dark:text-gray-400 text-sm">
          Already a member? <button onClick={() => navigate('/')} className="text-primary font-bold hover:underline decoration-2 ml-1">Log in</button>
        </p>
      </div>
    </div>
  );
};

export default Signup;