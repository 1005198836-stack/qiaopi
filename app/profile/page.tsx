'use client';
import { Share2, BookOpen } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';

export default function ProfilePage() {

  const menuItems = [
    { icon: BookOpen, label: '侨批故事', description: '了解侨批的历史' },
    { icon: Share2, label: '分享应用', description: '分享给好友' }
  ];

  return (
    <div className="min-h-screen bg-qiaopi-paper pb-24">
      <div className="bg-gradient-to-b from-qiaopi-red to-qiaopi-red/80 px-6 pt-12 pb-20">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-qiaopi-light/20 border-2 border-qiaopi-cream/50 flex items-center justify-center mb-4">
            <span className="text-qiaopi-cream font-qiaopi text-2xl">侨</span>
          </div>
          <h2 className="text-qiaopi-cream font-qiaopi text-xl font-medium">侨批用户</h2>
          <p className="text-qiaopi-cream/70 font-qiaopi text-sm mt-1">来自潮汕的游子</p>
          

        </div>
      </div>

      <div className="px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg border border-qiaopi-brown/20 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-4 py-4 hover:bg-qiaopi-light/50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-qiaopi-brown/10' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-qiaopi-red/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-qiaopi-red" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-qiaopi-dark font-qiaopi text-sm font-medium">{item.label}</p>
                <p className="text-qiaopi-dark/50 font-qiaopi text-xs">{item.description}</p>
              </div>
              <svg className="w-5 h-5 text-qiaopi-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-qiaopi-red/70 font-qiaopi text-sm text-center">
            侨批，承载着海外游子的思念与牵挂<br />
            一封封跨越山海的家书，诉说着人间真情
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-qiaopi-dark/40 font-qiaopi text-xs">侨批生成器 v1.0.0</p>
          <p className="text-qiaopi-dark/40 font-qiaopi text-xs mt-1">作者：anqicc</p>
        </div>
      </div>
      
      <BottomNav currentPage="profile" />
    </div>
  );
}
