'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { characters } from '@/stores/qiaopi';
import { backgroundStyles } from '@/lib/styles';

export default function WriteToCharacterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  
  const characterId = searchParams.get('id') || '';
  const character = characters.find(c => c.id === characterId);

  if (!character) {
    return (
      <div className="min-h-screen bg-qiaopi-paper flex items-center justify-center">
        <p className="text-qiaopi-dark/60 font-qiaopi">角色不存在</p>
      </div>
    );
  }

  const handleSend = () => {
    if (!senderName.trim()) {
      alert('请填写你的名字');
      return;
    }
    if (!message.trim()) {
      alert('请写下你想说的话');
      return;
    }
    
    router.push(`/waiting-reply?id=${characterId}&message=${encodeURIComponent(message)}&senderName=${encodeURIComponent(senderName)}`);
  };

  return (
    <div className="min-h-screen pb-24" style={backgroundStyles.writeLetter}>
      <Header title={`写信给 ${character.name}`} showBack onBack={() => router.back()} />
      
      <div className="px-6 pt-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-qiaopi-brown/40 to-qiaopi-brown/20 border-2 border-qiaopi-brown/40 flex items-center justify-center mb-4">
            <span className="text-qiaopi-dark font-qiaopi text-2xl">{character.name.charAt(0)}</span>
          </div>
          <p className="text-qiaopi-font font-qiaopi text-base text-center">{character.description}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-qiaopi-brown/30 shadow-sm p-5">
          <label className="block text-qiaopi-font font-qiaopi text-sm mb-3">你的名字</label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="请输入你的名字"
            className="w-full px-4 py-3 bg-transparent border border-qiaopi-brown/30 rounded-xl font-qiaopi text-qiaopi-font placeholder:text-qiaopi-dark/40 focus:outline-none focus:border-qiaopi-brown/50 transition-all mb-4"
          />
          
          <label className="block text-qiaopi-font font-qiaopi text-sm mb-3">在这里写下你想对{characterId === 'musheng' ? '他' : '她'}说的话...</label>
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=""
            rows={8}
            className="w-full px-4 py-3 bg-transparent border border-qiaopi-brown/30 rounded-xl font-qiaopi text-qiaopi-font placeholder:text-qiaopi-dark/40 focus:outline-none focus:border-qiaopi-brown/50 transition-all resize-none"
          />
          
          <div className="flex items-center justify-between mt-4 gap-4">
            <span className="text-qiaopi-dark/60 font-qiaopi text-xs whitespace-nowrap">{message.length} / 200</span>
            <button
              onClick={handleSend}
              disabled={!message.trim() || !senderName.trim()}
              className="flex-1 py-3 rounded-xl font-qiaopi text-base transition-all bg-qiaopi-red text-qiaopi-cream hover:bg-qiaopi-red/80 disabled:bg-qiaopi-brown/30 disabled:text-qiaopi-dark/40 disabled:cursor-not-allowed"
            >
              寄出信件
            </button>
          </div>
        </div>
      </div>
      
      <BottomNav currentPage="write" />
    </div>
  );
}
