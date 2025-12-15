import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShelterProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-gray-900 dark:text-gray-100 pb-28 min-h-screen">
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSYv1kfcZGjEkFkiHxlgE4v4xpxWkr_3-rNc70nsw5pounP6yFLwYzqj7nkK0Z3bmJfy0VjDVrcRNOQFZ0pkH7izzVC24pi1jQ3dV5Kgw5Ot9Uu_Evm2cR6GfHcz_BR5AVD95Dy2dWqlFJ8OIAsFAdGGTUjXxM9EiS0kSuXEImzHgURixvVvPUoNAyM7dFuE3e82mtm7UjkONujFejKUDEAct9yhQsnTrzBtffu7PVxQLZRctr7yG_3QjxtsvyiGCYAySa2-jmdCgc")' }}></div>
        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>favorite_border</span>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>ios_share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative px-4 -mt-12 mb-6">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full border-4 border-background-light dark:border-background-dark bg-white shadow-lg overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJR8Nvpe8GIm-mRxYaLp4yqiN1WhkQu50m9ITiGwDfoj3Kp1rjhees15MFMdk8Q8N1NR46BYvXNWUIT1srC4e--85rDFKPc-iPSEseppS0x0lUXm5-ujcIRylyFod4sGlwpPrE69k_Z1bryZe74zYWnlteOTFov7BWleFr3xaw1WdHsVYsBUUZXSv_Hlb-EtAlDitCbl8nwPV54eN3rb1v5y6qzQcLi7UeJ2V1zYK2ZG5vXvzvY46_3DilElxQR_2JqPKiwFi3jObE" alt="Jakarta Animal Hope Logo"/>
          </div>
          <div className="mt-3 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jakarta Animal Hope</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xs mx-auto">Providing a safe haven for stray animals since 2015.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4 w-full">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20">
              <span className="material-symbols-outlined text-[#2A9D8F]" style={{ fontSize: '18px' }}>verified</span>
              <span className="text-xs font-semibold text-[#2A9D8F]">Verified NPO</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>bolt</span>
              <span className="text-xs font-semibold text-primary">Response: &lt; 1 hr</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-6"></div>

      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Residents</h3>
          <button className="text-primary text-sm font-semibold flex items-center gap-0.5">
            See All
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4">
          {[
            { name: 'Luna', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1m_Ro4FEsXZUp5CzMqxmUa5qYT6jI8clfR1lhyDLAKoOl3vbXLzn7-I2hV_xNWy1giBDU7qiwmsgim0J2q5qrUBH7Ro2onr2ze70qk2eO2giZ3Fvr6WJhSyFBmlCb0qN0EzZByp2yJKH_ivzGtGZCN5p_utWc9A3rCHIkISYF0NedI44mSxFRL5OQlgLI15_XgTiQkFM9_-KJ9OwAPKobLNNzzS5EveOOBqFPho_3eHEmP5lOFuk35fFKGaxWU6tZ7DHj6IJawQ5w' },
            { name: 'Misty', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0X2M1MU9tkCHbV1ab-dSD-3JqxFt0zlb_Q33_x1gKMIKqu3UOJtg-PdYHOBmq-d08fhASumWovDSLPIXWS3xFuuuWaDbjaMnyjgE6IJbH_c0VKUAAcDBXMG_OJb2QTKsJ1U1AuWYqyAUobHR_jvLI56Do3KMjYCkZHuy7YkWBJ0t-GdJAifemAIKkt-3MIzdzkIyuzh9xiJxEgDfXF4VoIDvkAu3iXSLCY5ZYvWTKPK76PXuDOBz7hiURCWPpOZPBiPKrggDoACPe' },
            { name: 'Max', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvaLPe41j8OqJs4rP074LzXTMQ3Wr9gVXFfl2tES9A3edKIk9-9A30SQOExnuBi_1lc6YN0Y3CVqbnHKbXGjkwYV_rwlE7Tq-var75qxnjsHzKdKwU60xi7kGNT3jOuF13w_L1dQylzebvGJ9j5aws3R07L2Cb_0MQ46pKAoFsvf-eqaKhPV1gzFitdKM75RqXW6ZpWnPQDftATTbnotdoUR5JjTy9mavwpD1vFuromuJN1hk630jXKYMBI3X6MHJsk1H34y7waPkC' },
            { name: 'Bella', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDteYqvE0OvTCMXq8sqRAlT8gScDmS8K_ydabfkXirDXLDs8OMSKJ8DeREB2NZCOeRN2V4wWtF8iMtpAiI7c8pSzKkdvnuLh8bAWEJhNKbx--KKFrf7HFqjL0t81vYJV4G2BhudVHiYLmq_OA1Ws166gHS7jRiAVm1rA5ZRZ19BEKn9o2sV40EdmsQKyLw_PLBRj5KSc9C242tn3kysezxb39Sf1wB471mS1T4Ulk5tvc6mnWCm2EJ2429PgUf4J9NORt2FSiTz4KRK' }
          ].map((pet, i) => (
            <div key={i} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer" onClick={() => navigate('/adopt/1')}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100 dark:ring-gray-700">
                <img className="w-full h-full object-cover" src={pet.img} alt={pet.name}/>
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{pet.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
              <span className="text-xs font-bold">+8</span>
            </div>
            <span className="text-xs font-medium text-transparent">More</span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Visit Us</h3>
        <div className="bg-white dark:bg-[#2A201E] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="relative w-full aspect-[2/1] bg-gray-200">
            <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVeIWjwtYkqvJ3s5py-PicjvfGiPa-Y-t0SC_ld8LHMgeIOqG-NHVXzWG_e1SnNFnrUTH_eRYIdrkCjWu5UziybTvIgtE4EE787KA6VPrNBTPSVoxqiZABic2l5jsep8hKPiH1cPfzyFSWKCyb5UMqcRXU0taAMD04G1e-zWvYlIMC2nXZ-BbVj1Vz_VoC93Mml_XoXWSKOSRFvqTdySui0TLyLdzXQz_U_FBRzUJ1kjLn3XOpXi6qVGPX5-Vj7ZKDWyc6CsozqPWj" alt="Map Location"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute"></div>
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>pets</span>
                </div>
              </div>
            </div>
            <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-md flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-gray-700 dark:text-gray-200" style={{ fontSize: '16px' }}>directions</span>
              <span className="text-gray-900 dark:text-white">Get Directions</span>
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-gray-500" style={{ fontSize: '18px' }}>location_on</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">123 Pet Street, South Jakarta</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Jakarta, Indonesia 12430</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2A9D8F]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#2A9D8F]" style={{ fontSize: '18px' }}>schedule</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Open for visits</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mon - Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-md mx-auto w-full">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chat_bubble</span>
            Chat to Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShelterProfile;