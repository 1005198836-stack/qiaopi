'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-qiaopi-dark/50 backdrop-blur-sm" onClick={onClose} />
      
      <div
        className={`relative bg-[#FAF7F2] rounded-2xl shadow-2xl p-6 text-center transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        style={{ minWidth: '280px', maxWidth: '90%' }}
      >
        <div className="mb-4">
          <div 
            className="w-16 h-16 mx-auto rounded-full bg-qiaopi-red/10 flex items-center justify-center animate-stamp"
            style={{ animationDelay: '0.2s' }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-qiaopi-red" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        <h3 className="text-qiaopi-dark font-qiaopi text-lg font-semibold mb-2">保存成功</h3>
        
        <p className="text-qiaopi-dark/70 font-qiaopi text-sm">{message}</p>

        <div className="mt-6 pt-4 border-t border-qiaopi-brown/20">
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="px-8 py-2 bg-gradient-to-r from-qiaopi-red to-qiaopi-red/80 text-qiaopi-cream font-qiaopi text-sm rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
}

export function useToast() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  const ToastContainer = () => {
    if (!toastMessage) return null;
    return <Toast message={toastMessage} onClose={hideToast} />;
  };

  return { showToast, ToastContainer };
}