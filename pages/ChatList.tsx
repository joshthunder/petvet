import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatList: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const chats = [
    {
      id: 1,
      name: 'Dr. Sarah Jenkins',
      role: 'Veterinarian',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPda9TOGPfZbKcV5FJrkxNt4gVtRMblYXVTdll0-IJ17i60YckmbDNKh0qh56CiLBJmhy7iH_fZqNXaHWfHDSTWL8G5XqAqtgr96U1qw5fjOvX7U2WwAbrPpIDc5fI6X4n6iPcmtr3nvTbVtfT4eYZKymtXkvaWKww6WUZ764Cl8GVfWjdNqvQ7Zv-97y_WefwtX3nDl2iZR9C3tmhN65yRnrfw_EciNaWkqCFK-NQCUGZUbh7NnXKYKjXIq3AdvWoAOK3d4ibPT0p',
      message: 'That is worrying. Has she been drinking water?',
      time: '10:05 AM',
      unread: 2,
      online: true,
      category: 'Vets'
    },
    {
      id: 2,
      name: 'Jakarta Animal Hope',
      role: 'Shelter',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJR8Nvpe8GIm-mRxYaLp4yqiN1WhkQu50m9ITiGwDfoj3Kp1rjhees15MFMdk8Q8N1NR46BYvXNWUIT1srC4e--85rDFKPc-iPSEseppS0x0lUXm5-ujcIRylyFod4sGlwpPrE69k_Z1bryZe74zYWnlteOTFov7BWleFr3xaw1WdHsVYsBUUZXSv_Hlb-EtAlDitCbl8nwPV54eN3rb1v5y6qzQcLi7UeJ2V1zYK2ZG5vXvzvY46_3DilElxQR_2JqPKiwFi3jObE',
      message: 'Thank you for your interest in Luna! She is available.',
      time: 'Yesterday',
      unread: 0,
      online: false,
      category: 'Shelters'
    },
    {
      id: 3,
      name: 'Pet Wise Support',
      role: 'Customer Service',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1wKwtqkGRB8LKb8MwEDdNzJVPwilhon8VDr3ZLug5oKaGZkpeoLZLqZoYaTnF3WFDee4zNEpreqEeOR1oO9hGm-KSV1FAOcVCamBrjTMYQRRdfhZ34lm6KSBt5aKM9QuHbxw3z2XLswy79N9mDGNFrFrcSio6MAa9udh6yuTgTRQ0_p9R3iICZgfbNUsZYck-FU_BD7QUcRkUDEwJ-WL-1Eja38q-B7EqOokiqN410Qco7sQ2LS1BqtICsiYUMmVT4FxYKothQc5W',
      message: 'Your order #8821 has been shipped successfully.',
      time: 'Tue',
      unread: 0,
      online: false,
      category: 'Support'
    },
     {
      id: 4,
      name: 'Dr. Budi Santoso',
      role: 'Surgeon',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpiksOadcaFaPSLb8tMX3ZCZaDQCVsoR-vk1qYNWSoepOQj1g71eTjZh9GfPZydEe7vnAZIbaJOZxQl8wT6VExSnk7od3ga0Mc_WZOh9L23ySSjh4Qw2gKY4aAZNJUVUBtTFprRt16dTYTih8BPZmaaYVLeXwtF9EnL6E3gRR2U65Ee9Ga6AR3Hx3E_v-D9TGXW_ghg1sCGnphr6zsl1LogP_S6KMOusSajtkLhbl1C2DonoxkRyxSfjqIJseb_UvqI1_7n_p9lS5r',
      message: 'The surgery went well. Max is recovering nicely.',
      time: 'Mon',
      unread: 0,
      online: false,
      category: 'Vets'
    }
  ];

  const filteredChats = filter === 'All' ? chats : chats.filter(c => c.category === filter || (filter === 'Vets' && c.category === 'Vets'));

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display pb-28">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Messages</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm transition-transform active:scale-95">
          <span className="material-symbols-outlined text-primary">edit_square</span>
        </button>
      </header>

      {/* Search */}
      <div className="px-6 pb-2">
        <div className="flex w-full items-center rounded-full bg-white dark:bg-[#1C2A29] h-12 shadow-sm border border-transparent focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <div className="flex items-center justify-center pl-4 text-gray-400">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input className="flex w-full bg-transparent border-none focus:ring-0 text-base font-medium text-slate-900 dark:text-white placeholder:text-gray-400 h-full px-3" placeholder="Search chats..." type="text"/>
        </div>
      </div>

      {/* Categories */}
      <div className="flex w-full gap-2 overflow-x-auto hide-scrollbar px-6 py-4">
        {['All', 'Vets', 'Shelters', 'Support'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              filter === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'bg-white dark:bg-[#1C2A29] text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chat List */}
      <div className="flex flex-col flex-1 px-4 gap-2">
        {filteredChats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => navigate(`/consultation/${chat.id}`)}
            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/60 dark:hover:bg-white/5 active:bg-white dark:active:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border border-gray-100 dark:border-gray-700">
                <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
              </div>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-background-light dark:border-background-dark rounded-full"></div>
              )}
            </div>
            
            <div className="flex flex-col flex-1 min-w-0 gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white truncate text-[15px]">{chat.name}</h3>
                  {chat.role && (
                    <span className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide shrink-0">
                      {chat.role}
                    </span>
                  )}
                </div>
                <span className={`text-xs font-medium ${chat.unread > 0 ? 'text-primary' : 'text-gray-400'}`}>{chat.time}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'font-bold text-slate-800 dark:text-slate-100' : 'text-gray-500 dark:text-gray-400 font-medium'}`}>
                  {chat.message}
                </p>
                {chat.unread > 0 && (
                  <div className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-white text-[10px] font-bold shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-3rem)] max-w-[400px] -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 shadow-nav p-2">
        <nav className="flex items-center justify-between px-2">
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" onClick={() => navigate('/dashboard')}>
            <span className="material-symbols-outlined">home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-primary">
            <span className="material-symbols-outlined filled">forum</span>
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

export default ChatList;