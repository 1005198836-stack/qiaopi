'use client';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { getQiaopiList, mockQiaopiList } from '@/stores/qiaopi';
import { backgroundStyles } from '@/lib/styles';

export default function MailboxPage() {
  const router = useRouter();
  const qiaopiList = getQiaopiList();

  const handleLetterClick = (qiaopi: typeof mockQiaopiList[0]) => {
    const queryParams = new URLSearchParams({
      senderName: qiaopi.sender.name,
      senderGender: qiaopi.sender.gender,
      senderOrigin: qiaopi.sender.hometown,
      senderLocation: qiaopi.sender.currentLocation,
      senderOccupation: qiaopi.sender.occupation,
      relationship: qiaopi.sender.relation,
      receiverName: qiaopi.receiver.name,
      receiverGender: qiaopi.receiver.gender
    });
    router.push(`/letter-detail?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen pb-24" style={backgroundStyles.writeLetter}>
      <Header title="我的信箱" showBack onBack={() => router.back()} />

      <div className="px-6 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-qiaopi-dark font-qiaopi text-lg">你寄出的侨批</h2>
          <span className="text-qiaopi-dark/60 font-qiaopi text-sm">{qiaopiList.length} 封</span>
        </div>

        {qiaopiList.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-qiaopi-brown/10 rounded-full flex items-center justify-center">
              <span className="text-qiaopi-brown/40 font-qiaopi text-2xl">信</span>
            </div>
            <p className="text-qiaopi-dark/60 font-qiaopi">暂无收藏的侨批</p>
            <button
              onClick={() => router.push('/write')}
              className="mt-4 px-6 py-2 bg-qiaopi-red text-qiaopi-cream font-qiaopi text-sm rounded-full hover:bg-qiaopi-red/80 transition-colors"
            >
              写一封侨批
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {qiaopiList.map((qiaopi, index) => (
              <div
                key={qiaopi.id}
                onClick={() => handleLetterClick(qiaopi)}
                className="bg-gradient-to-br from-qiaopi-light to-white rounded-2xl border border-qiaopi-brown/20 shadow-sm p-4 cursor-pointer hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-20 flex-shrink-0">
                    <img
                      src="/images/cards/write-letter-bg.png"
                      className="w-full h-full object-cover rounded-lg"
                      alt="侨批"
                    />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-qiaopi-red rounded-full flex items-center justify-center">
                      <span className="text-qiaopi-cream text-xs">批</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-qiaopi-dark font-qiaopi text-sm font-medium truncate">
                        {qiaopi.sender.name} 寄给 {qiaopi.receiver.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-qiaopi-dark/60 font-qiaopi mb-2">
                      <span>{qiaopi.sender.hometown}</span>
                      <span>→</span>
                      <span>{qiaopi.sender.currentLocation}</span>
                    </div>

                    <p className="text-qiaopi-dark/60 font-qiaopi text-xs line-clamp-2">
                      {qiaopi.content.substring(0, 50)}...
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-qiaopi-dark/40 font-qiaopi text-xs">{qiaopi.createdAt}</span>
                      <span className="text-qiaopi-brown font-qiaopi text-xs">查看详情 →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav currentPage="mailbox" />
    </div>
  );
}