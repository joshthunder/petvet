import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-background-dark shadow-sm">
      <div className="w-full h-[40vh] min-h-[320px] bg-background-light dark:bg-background-dark flex items-center justify-center relative rounded-b-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 rounded-b-[40px]"></div>
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZ02XsA0ccoGbKL8kxXYZd3Bi5ftzycrI2yMZDYHU_zk696uf31hON8x4dzi45Kr2AOpOvKnx5lEDC57Q-Am7sGi4xkpmjJa2agHIiFUR4ywCMnAMza-6V-BPv2wmbA43buwUykNX59Gzv-Tm2B7zdLstZ7sU86NSuKb8CjdZ83DMGQCLBRotgoK0zZ1nGtrvpYFiv7wQ4-7Z0MJ_8uNpaVxdSUosTpQyHZ9dGEvNtgvNpruxvO9gHiO72TD0UR9RxzkSNfNsa9oQk")' }}
        >
        </div>
      </div>
      
      <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
        <h2 className="text-text-main dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-center mb-8">
          Welcome back,<br/><span className="text-primary">Paw-rent!</span>
        </h2>
        
        <form className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-text-main dark:text-white text-sm font-semibold ml-2">Email</label>
            <input className="w-full h-14 px-6 rounded-full bg-white dark:bg-[#1E2D2B] border border-gray-200 dark:border-[#2C3E3C] text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base shadow-sm" placeholder="you@example.com" type="email"/>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-text-main dark:text-white text-sm font-semibold ml-2">Password</label>
            <div className="relative w-full">
              <input className="w-full h-14 px-6 pr-12 rounded-full bg-white dark:bg-[#1E2D2B] border border-gray-200 dark:border-[#2C3E3C] text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base shadow-sm" placeholder="••••••••" type="password"/>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" type="button">
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
              </button>
            </div>
            <div className="flex justify-end mt-1 mr-2">
              <a className="text-sm font-medium text-gray-400 hover:text-primary transition-colors" href="#">Forgot Password?</a>
            </div>
          </div>
          
          <button 
            type="button" 
            onClick={() => navigate('/dashboard')}
            className="w-full h-14 mt-2 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 transition-all duration-200 active:scale-[0.98]"
          >
            Log In
          </button>
        </form>
        
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-[#2C3E3C]"></div>
            </div>
            <span className="relative bg-white dark:bg-background-dark px-4 text-sm font-medium text-gray-400">Or continue with</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-[#2C3E3C] bg-white dark:bg-[#1E2D2B] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#253634] transition-colors shadow-sm">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">G</div>
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-[#2C3E3C] bg-white dark:bg-[#1E2D2B] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#253634] transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-black dark:text-white">ios</span>
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-[#2C3E3C] bg-white dark:bg-[#1E2D2B] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#253634] transition-colors shadow-sm">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">f</div>
            </button>
          </div>
        </div>
        
        <div className="mt-auto pt-8 flex items-center justify-center">
          <p className="text-text-main dark:text-white font-medium text-sm">
            Don't have an account? 
            <button onClick={() => navigate('/signup')} className="text-accent font-bold hover:underline ml-1">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;