'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GeneratingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          const formData: Record<string, string> = {};
          searchParams.forEach((value, key) => {
            formData[key] = value;
          });
          const queryParams = new URLSearchParams(formData);
          setTimeout(() => {
            router.push(`/open-letter?${queryParams.toString()}`);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-[url('/images/backgrounds/write-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center px-6">
      <div className="w-full max-w-xs mt-12 text-center">
        <p className="text-[#4B2A1A] font-qiaopi text-lg font-bold mb-3">正在为你书写侨批...</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-[#D4C4A8] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#8B2500] transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="text-[#4B2A1A] font-qiaopi text-lg font-bold">{Math.min(Math.floor(progress), 100)}%</span>
        </div>
      </div>
    </div>
  );
}
