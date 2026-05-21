'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function OpenLetterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening || hasOpened) return;
    
    setIsOpening(true);
    setTimeout(() => {
      setHasOpened(true);
      setTimeout(() => {
        const formData: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          formData[key] = value;
        });
        const queryParams = new URLSearchParams(formData);
        router.push(`/letter-detail?${queryParams.toString()}`);
      }, 800);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[url('/images/backgrounds/write-letter-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-[#4B2A1A] font-qiaopi text-xl font-bold mb-2">拆开信封</h2>
        <p className="text-[#4B2A1A]/70 font-qiaopi text-sm font-bold mb-8">点击拆开信封，查看侨批</p>

        <div 
          className="relative cursor-pointer select-none"
          onClick={handleOpen}
        >
          <div className="w-56 mx-auto relative" style={{ perspective: '1000px' }}>
            <div 
              className="transition-transform duration-[1.5s] ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: isOpening ? 'rotateX(-180deg)' : 'rotateX(0deg)'
              }}
            >
              <div 
                className="w-full"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img 
                  src="/images/envelope-front.png" 
                  alt="信封正面" 
                  className="w-full"
                />
              </div>
              
              <div 
                className="absolute inset-0"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)'
                }}
              >
                <img 
                  src="/images/envelope-back.png" 
                  alt="信封背面" 
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {!hasOpened && (
            <div className="mt-6 animate-bounce">
              <div className="w-8 h-10 mx-auto border-2 border-[#4B2A1A]/60 rounded-full flex items-start justify-center p-2">
                <div className="w-0.5 h-4 bg-[#4B2A1A]/60 rounded-full" />
              </div>
              <p className="text-[#4B2A1A]/60 font-qiaopi text-xs font-bold mt-2">点击拆开信封</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
