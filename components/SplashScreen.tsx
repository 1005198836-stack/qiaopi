'use client';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('正在加载...');

  useEffect(() => {
    const imagesToLoad = [
      '/images/backgrounds/home-bg.jpg',
      '/images/backgrounds/write-letter-bg.png',
      '/images/backgrounds/write-bg.png',
      '/images/cards/card-mailbox-bg.png',
      '/images/cards/card-write-bg.png',
      '/images/envelope-front.png',
      '/images/envelope-back.png',
      '/images/icons/envelope.png',
    ];

    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / imagesToLoad.length) * 100);
      setProgress(newProgress);
      
      if (loadedCount < imagesToLoad.length) {
        setStatus(`正在加载资源 ${loadedCount}/${imagesToLoad.length}`);
      } else {
        setStatus('准备就绪');
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    imagesToLoad.forEach(src => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#8B6914]">
      {/* Logo 区域 */}
      <div className="mb-8">
        <div className="w-20 h-20 rounded-full bg-[#F5E6D3] flex items-center justify-center p-4 animate-pulse">
          <img src="/images/icons/envelope.png" className="w-full h-full object-contain" alt="信封" />
        </div>
      </div>

      {/* 标题 */}
      <h1 className="text-3xl font-qiaopi text-[#F5E6D3] mb-2 tracking-wider">银信局</h1>
      <p className="text-[#D4C4A8] font-qiaopi text-sm mb-8">侨批生成器</p>

      {/* 进度条 */}
      <div className="w-64">
        <div className="h-2 bg-[#D4C4A8]/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#F5E6D3] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-[#D4C4A8] font-qiaopi text-xs mt-3">{status}</p>
      </div>

      {/* 底部装饰文字 */}
      <p className="absolute bottom-12 text-[#D4C4A8]/50 font-qiaopi text-sm italic">
        「银信附关，见字如面。」
      </p>
    </div>
  );
}
