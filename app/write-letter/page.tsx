'use client';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { characters } from '@/stores/qiaopi';
import { backgroundStyles } from '@/lib/styles';

export default function WriteLetterPage() {
  const router = useRouter();

  const handleSelectCharacter = (characterId: string) => {
    router.push(`/write-to-character?id=${characterId}`);
  };

  return (
    <div className="min-h-screen pb-24" style={backgroundStyles.writeLetter}>
      <Header title="给他们写信" subtitle="他们会回信给你" showBack onBack={() => router.back()} />
      
      <div className="px-6 pt-6">
        <p className="text-qiaopi-dark/60 font-qiaopi text-sm mb-6">选择想要写信的对象</p>

        <div className="space-y-4">
          {characters.map((character, index) => (
            <div
              key={character.id}
              onClick={() => handleSelectCharacter(character.id)}
              className="bg-gradient-to-br from-qiaopi-light to-white rounded-2xl border border-qiaopi-brown/20 shadow-sm p-4 cursor-pointer hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-qiaopi-brown/30 to-qiaopi-brown/10 border border-qiaopi-brown/30 flex items-center justify-center">
                  <span className="text-qiaopi-dark font-qiaopi text-xl">{character.name.charAt(0)}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-qiaopi-dark font-qiaopi text-lg font-medium">{character.name}</h3>
                  <p className="text-qiaopi-dark/60 font-qiaopi text-sm mt-1">{character.description}</p>
                </div>
                
                <div className="text-qiaopi-brown">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav currentPage="write" />
    </div>
  );
}
