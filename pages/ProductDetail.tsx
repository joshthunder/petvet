import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col mx-auto max-w-md bg-background-light dark:bg-background-dark shadow-2xl font-display">
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-black/40 to-transparent">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined">ios_share</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-2 right-2 size-2 bg-accent rounded-full border border-white/20"></span>
          </button>
        </div>
      </nav>

      <div className="relative w-full h-[45vh] bg-white dark:bg-gray-800">
        <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div className="w-full h-full flex-shrink-0 snap-center relative">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc4Ko2xElxaY1hRulvnX7UrM_zmceEsw6OGeJ0nWGwW5cyjNl9PNo0xzWlTAMPTt664tikoRxakoJBdyfjmXaqcG2ds2Yz-DNz2sFhgQwNZzrW8pT7bEiqih9trEWk4I8ID2DgPo6CA4gn3z5eieHbVTfQOb03EEcgxGGeqRGLWhpLCI6RSqah0DDKWVa0p2LpzGkMvv4ULgCz_NqBC2__yvE0Sze2z72FCQGLSoB7-vanMdxciGLTzTaZNJDMXCoWNbTXRADVsSMV")' }}></div>
          </div>
          <div className="w-full h-full flex-shrink-0 snap-center relative">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACVdddWxOcAZm-utVHUpFd0HlQ3Zt2QOkE2SRJnn1wBhywZHmpl5-E1N_uEsz171guY-vjDI1Dm7oZVAnNhaRebuOHtqU4Z5sSiaWF2n9MByLnHanRtPR8z7pbkk3bPVpuO-fgsiIIgREKM0Ee9glnBKIGYVB9CMM7hicUzqdciBxpAES_A5TMnof4O_r-NaikefqHbwh0K5pcNcLTtOoNBUFCcNx-fd_dx_UbEOa8Yn86sjktnNfCPzOF0QRAkoj1OBZg2KMpa_q1")' }}></div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
          <div className="h-1.5 w-6 rounded-full bg-primary shadow-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/60 shadow-sm backdrop-blur-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/60 shadow-sm backdrop-blur-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/60 shadow-sm backdrop-blur-sm"></div>
        </div>
      </div>

      <main className="relative z-10 -mt-6 flex flex-col flex-1 rounded-t-3xl bg-surface-light dark:bg-surface-dark px-6 pt-8 pb-32 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-1">HealthyPaws</p>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Adult Chicken &amp;<br/>Brown Rice Formula</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-100 dark:border-yellow-800/30">
              <span className="material-symbols-outlined text-yellow-500 text-lg filled">star</span>
              <span className="text-sm font-bold text-slate-900 dark:text-yellow-100">4.8</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">(120 reviews)</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-[32px] font-black text-accent tracking-tight">Rp 150.000</p>
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">inventory_2</span>
            <span className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">In Stock</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <details open className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-4 bg-background-light dark:bg-background-dark/50">
            <summary className="flex cursor-pointer items-center justify-between list-none mb-3">
              <span className="text-lg font-bold text-slate-900 dark:text-white">Description</span>
              <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_less</span>
            </summary>
            <div className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              <p>A balanced diet rich in protein to support lean muscle maintenance. This formula is crafted with real chicken as the first ingredient, combined with wholesome brown rice for sustained energy. No artificial preservatives or fillers.</p>
            </div>
          </details>

          <div className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-4 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined text-lg">nutrition</span>
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">Ingredients &amp; Nutrition</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-30 px-6 pt-4 pb-8 bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="flex items-stretch gap-4">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-full px-4 h-14 w-36 shrink-0">
            <button className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm hover:scale-105 active:scale-95 transition">
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            <span className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">1</span>
            <button className="size-8 flex items-center justify-center rounded-full bg-primary text-white shadow-sm hover:scale-105 active:scale-95 transition">
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>
          <button className="flex-1 h-14 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-white">shopping_bag</span>
            <span className="text-white font-bold text-lg">Add to Cart</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;