'use client';
import { useRouter } from 'next/navigation';
import { BottomNav } from '@/components/BottomNav';
import { backgroundStyles } from '@/lib/styles';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景图片 - 支持替换 */}
      <div className="absolute inset-0">
        {/* 背景图 */}
        <img 
          src="/images/backgrounds/home-bg.jpg" 
          className="w-full h-full object-cover" 
          alt="侨信局背景" 
        />
        {/* 光效叠加层 - 营造温暖氛围 */}
        <div className="absolute inset-0 bg-gradient-to-t from-qiaopi-dark via-qiaopi-dark/40 to-qiaopi-dark/60" />
        {/* 顶部渐变遮罩 */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-qiaopi-dark/80 to-transparent" />
        {/* 底部渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-qiaopi-dark/90 to-transparent" />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 min-h-screen flex flex-col pb-20">
        {/* 左上角LOGO - 圆形米色底 + 信封图标 */}
        <div className="pt-safe-top pt-6 pl-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#F5E6D3] flex items-center justify-center p-1">
              <img src="/images/icons/envelope.png" className="w-full h-full object-contain" alt="信封" />
            </div>
            <span className="text-[#4B2A1A] text-sm font-qiaopi">银信局</span>
          </div>
        </div>

        {/* 主标题区域 */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <div className="text-center mb-8">
            {/* 主标题 - 两个字体大小一致 */}
            <h1 className="text-4xl font-qiaopi text-qiaopi-cream text-shadow-qiaopi tracking-wider">
              银信越海
            </h1>
            <h2 className="text-4xl font-qiaopi text-qiaopi-gold text-shadow-qiaopi tracking-wider mt-2">
              家书抵心
            </h2>
            
            {/* 副标题 */}
            <div className="mt-6 space-y-1">
              <p className="text-qiaopi-cream/70 text-sm font-qiaopi">
                生成一封来自旧时代的侨批
              </p>
              <p className="text-qiaopi-cream/60 text-sm font-qiaopi">
                把思念寄回家
              </p>
            </div>
          </div>

          {/* 主要按钮 */}
          <button
            onClick={() => router.push('/write')}
            className="w-full py-4 bg-gradient-to-r from-qiaopi-red to-qiaopi-red/80 text-qiaopi-cream font-qiaopi text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
          >
            写一封侨批
          </button>

          {/* 两个子按钮 */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button
              onClick={() => router.push('/write-letter')}
              className="relative h-36 rounded-xl p-4 text-left hover:scale-[1.02] transition-all duration-300"
              style={backgroundStyles.cardWrite}
            >
              <div className="text-[#4B2A1A] font-qiaopi text-lg mb-1">给他们写信</div>
              <div className="text-[#4B2A1A]/70 font-qiaopi text-sm">淑柔、木生、南枝</div>
              <div className="absolute bottom-3 right-3 text-[#4B2A1A]/60 text-base">→</div>
            </button>
            
            <button
              onClick={() => router.push('/mailbox')}
              className="relative h-36 rounded-xl p-4 text-left hover:scale-[1.02] transition-all duration-300"
              style={backgroundStyles.cardMailbox}
            >
              <div className="text-[#4B2A1A] font-qiaopi text-lg mb-1">我的信箱</div>
              <div className="text-[#4B2A1A]/70 font-qiaopi text-sm">查看已生成的侨批</div>
              <div className="absolute bottom-3 right-3 text-[#4B2A1A]/60 text-base">→</div>
            </button>
          </div>
        </div>

        {/* 底部文字 - 不需要卡片 */}
        <div className="px-6 mb-4 pb-4">
          <p className="text-center text-qiaopi-cream/50 font-qiaopi text-sm italic">
            「银信附关，见字如面。」
          </p>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav currentPage="home" />
    </div>
  );
}