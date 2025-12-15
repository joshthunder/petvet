import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark pb-24 font-display">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-2 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center h-12 bg-white dark:bg-surface-dark rounded-full shadow-sm border border-gray-100 dark:border-gray-800 px-4">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-base ml-2 placeholder-gray-400 dark:placeholder-gray-500 text-[#121716] dark:text-white" placeholder="Search food, toys..." type="text"/>
          </div>
          <button className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-white dark:border-surface-dark"></span>
            </span>
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6">
        <section className="flex overflow-x-auto hide-scrollbar px-4 gap-4 snap-x snap-mandatory">
          <div className="snap-center shrink-0 w-[85%] relative rounded-2xl overflow-hidden aspect-[2/1] shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKayMg0mOc6FULINgc9rPTHhxNSNf1eLaxk0mpXWc4f09NbSrduLKAXOycIOgNvUjQymDydr3nZKEMukS2hNeyC8RePKy5kSxuwfT08rUiUEuRbebGoULztPR2OM96Jq0kWGRlivfqEfC9sF1B6YvvDOoItHMCxPaB_Wo9JniHX5Mjt9PvWEUzjOQr5TtEh4jf_jZNdpS4eM6muxTGBxHj-d7mPHDB--uAXzIxmpVU9YxaJcMXW3asJweQNuTpPTLyvFjQx2SBjTZo")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6">
              <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-md w-fit mb-2">LIMITED TIME</span>
              <h2 className="text-white text-2xl font-bold leading-tight mb-1">Summer Sale</h2>
              <p className="text-white/90 font-medium">20% Off Vitamins</p>
            </div>
          </div>
          <div className="snap-center shrink-0 w-[85%] relative rounded-2xl overflow-hidden aspect-[2/1] shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlQ6--UbnDf8NLwM_66FP8LToMO-8Fnxw1UUyapPqGo-tTNIofvjdgpABQPl5YtjiLrHNXZEgu_Cm01H9V9bRz6t-KH-48rNsUnMp7r5IE7beMZ59H03JjPWXWm1L1ZjBD2FoudWyQTL6rQINRFtJa881vTxf5QgU0IOfJv3XPNlQ66uDponzccpSTq3LULv89uAW1cIkoKZnYTvsShGIhQTEHNrQOe5ols3eNA21-OqXW8nHfjOgbvUw4N0_kkVvwZg0W74bKNrcm")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md w-fit mb-2">NEW ARRIVALS</span>
              <h2 className="text-white text-2xl font-bold leading-tight mb-1">Chew Toys</h2>
              <p className="text-white/90 font-medium">Check them out</p>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="flex justify-between items-start gap-2">
            {[
              { icon: 'pet_supplies', label: 'Food' },
              { icon: 'medication', label: 'Vitamins' },
              { icon: 'sports_baseball', label: 'Toys' },
              { icon: 'checkroom', label: 'Accessories' }
            ].map((cat, idx) => (
              <button key={idx} className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">{cat.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#121716] dark:text-white">Recommended for You</h2>
            <button className="text-sm font-medium text-primary hover:text-primary/80">See All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-gray-800 flex flex-col gap-3 group" onClick={() => navigate('/shop/1')}>
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSP4F6btpgFUDZ5fjWSVQo61bebslf4z5ClYTzKHs1XYpdWp2RnP-GfV1Xy1DWbM3Y5XCwc7SZyA952d8UB4XjTwNCtwNL-eDTuBFeYRaYj8SSLnCQDEC0Yq7tC_ya6nC0uxNcsy7jTyegsTRyIW0hLhKdDvlyi2ZcKNK8rWOVQph0pRkEmqNlwZGixzYlvCDhatequF9X8VDH2wJ3Tmh5yVaUpxpWN7gGFMvaRMKDhgQaGTG76ueVsgQQv3MhFjNElPanyvmP6Btr")' }}></div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-medium text-[15px] leading-tight text-gray-900 dark:text-gray-100 line-clamp-2">Organic Salmon Dog Food</h3>
                  <p className="text-xs text-gray-500 mt-1">Premium Quality</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">$45.00</span>
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm hover:bg-primary/90 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-gray-800 flex flex-col gap-3 group">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd3gc7FtqQe9PpPG0XPJuRI083t8Z4Pv9BwULbKoienl6oxreFfaZ6f7nxUczg0fI-ZgQ7WbldAkm8ar5jyQsdCfzhb_kkxqZcQEzMuCOlhs8PQdyLJs82kJvsC2BBWv0j_IaeU8zKclVxCJOIzolqp6n7YjdO6xUSN0tAeO6bj8bh7WpZXMeiDSWAL1lK3ERRQ06N0fBZq-yL-SfpXxemynP9sKdjXHxCkJoAG1WWo-lj56GSYLMhaqL_QCquNDAyDK-6n1Acn1Zx")' }}></div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-medium text-[15px] leading-tight text-gray-900 dark:text-gray-100 line-clamp-2">Chew-Proof Rope Toy</h3>
                  <p className="text-xs text-gray-500 mt-1">Toys</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">$12.50</span>
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm hover:bg-primary/90 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-gray-800 flex flex-col gap-3 group">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9EoSmlZLkSf_cwOg--YJ2trMVz6nviH6cm_hikn_M9TqKyXZUax5Fqucr16IMX5xl2YnQST7fsansaoJHUf6kRjpIA0KSSoFx7zXiGmcHNlb6H1XWfaKFvpB06ZyJFBjLLI00b_PzXXP5T9bTiUloGg5mkxXSbPUS8ng8B46wMP5JmOSQ4Wn5dJPw3W_4gG29j2P0e2n0UotVNqZ8-wMLP0KHWyOhmw8mVG6Ok0rO4574qoeq8b32lcawZMxXQEKyyjKXzYfeleEg")' }}></div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-medium text-[15px] leading-tight text-gray-900 dark:text-gray-100 line-clamp-2">Shiny Coat Vitamins</h3>
                  <p className="text-xs text-gray-500 mt-1">Health</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">$22.00</span>
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm hover:bg-primary/90 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] dark:shadow-none dark:border dark:border-gray-800 flex flex-col gap-3 group">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMkaLWCbs-AP9AJ_cdqQEzq5GcSP7npOm_KILyi64pszkqP1WqdyxQC0OTdxVfmFuhf026EPaZ_GiFoNsKQG6QgfSpbs3bkyhPcvnGgscP7h6Tsv2RIZBOvXBlYDnGzGsV3uMhycugPwt_O_x2FsPELPa_WMJCeanCxQY-ktDQDRH5W2xjHLYkv6kOJlILWRz6oowLxRk9IP8dE7u4hyIyPmrENcvdwjkrqUKt2KKeTSCJ_nZr_ZPJokU8ZW-dsl7-ZOuhu1aKKkNs")' }}></div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-medium text-[15px] leading-tight text-gray-900 dark:text-gray-100 line-clamp-2">Automatic Water Dispenser</h3>
                  <p className="text-xs text-gray-500 mt-1">Accessories</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">$35.99</span>
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm hover:bg-primary/90 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary" onClick={() => navigate('/shop')}>
          <span className="material-symbols-outlined filled">storefront</span>
          <span className="text-[10px] font-medium">Shop</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" onClick={() => navigate('/dashboard')}>
          <span className="material-symbols-outlined">pets</span>
          <span className="text-[10px] font-medium">My Pets</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-medium">Favorites</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" onClick={() => navigate('/profile')}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Shop;