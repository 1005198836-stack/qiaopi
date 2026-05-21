'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { characters } from '@/stores/qiaopi';
import { backgroundStyles } from '@/lib/styles';

const shurouReplies = [
  `接到来书，字字平安，吾心甚慰。你在外谋生不易，切记：身体为本，万事忍让。家中勿念，阿嫲尚健。惟愿你出入平安，贵人相助，早赐机缘，归家团圆。纸短情长，伏惟珍重。`,
  `接读来书，知你挂念，阿嫲心暖。家中大小平安，田禾照种，勿念。你在外头，第一要吃饱穿暖，第二要和善忍让。逢人三分礼，遇事七分让。平安二字值千金，切记。顺颂客安。`,
  `慈览者：前日来信收悉，捧读再三，如见汝面。你在外谋生，阿嫲日日挂心。惟愿你平安顺遂，贵人扶持，身体康健，早归故里。家中诸事，不必挂怀。专此奉复，并问近佳。`
];

const mushengReplies = [
  `信收到了，见字如面。你在外头要挺直腰杆做人，莫怕事，也莫惹事。吃得苦中苦，方为人上人。记住：路见不平，能帮就帮；自己平安，最是值钱。等忙完这阵，回去找你喝酒！顺祝顺遂。`,
  `来信收悉，知你一切安好，大哥放心了。在外闯荡，记住三件事：身体要硬，胆子要正，心地要善。别学那些偷奸耍滑的，咱穷也要穷得堂堂正正。等哥赚到钱，带你吃香的喝辣的！保重！`,
  `见信好。你在外头，大哥只有一句：挺直腰杆做人，莫欺人，也莫被人欺。有事别自己扛，写信来。平安最好，其余都是小事。等回去，咱兄弟喝个痛快！珍重。`
];

const nanzhiReplies = [
  `信悉。你惦记着我，我自然也惦记着你。在外照顾好自己，别让我担心。有难处开口，我必相助。余言后叙，伏惟珍重。`,
  `贤妹如晤：信悉。有事别自己扛，写信来，多远我都想办法。缺什么告诉我，我能办的一定办。你只管安心，后面有我。伏惟珍重。`,
  `贤妹如晤：信悉。日子是一天一天过出来的，莫着急。你比我强，我知道你能行。累了就歇歇，别把自己逼太紧。等你好了，咱见面聊。保重。`
];

export default function WaitingReplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  
  const characterId = searchParams.get('id') || '';
  const message = searchParams.get('message') || '';
  const userSenderName = searchParams.get('senderName') || '';
  const character = characters.find(c => c.id === characterId);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            let replyMessage = message;
            if (characterId === 'shurou') {
              const randomIndex = Math.floor(Math.random() * shurouReplies.length);
              replyMessage = shurouReplies[randomIndex];
            } else if (characterId === 'musheng') {
              const randomIndex = Math.floor(Math.random() * mushengReplies.length);
              replyMessage = mushengReplies[randomIndex];
            } else if (characterId === 'nanzhi') {
              const randomIndex = Math.floor(Math.random() * nanzhiReplies.length);
              replyMessage = nanzhiReplies[randomIndex];
            }
            
            let senderLocation = '暹罗';
            let senderOrigin = '';
            if (characterId === 'shurou') {
              senderLocation = '潮州';
              senderOrigin = '';
            }
            
            const mockParams = new URLSearchParams({
              senderName: character?.name || '',
              senderGender: characterId === 'shurou' ? '女' : '男',
              senderOrigin: senderOrigin,
              senderLocation: senderLocation,
              senderOccupation: '居家',
              relationship: '好友',
              receiverName: userSenderName || '友人',
              receiverGender: '男',
              message: replyMessage,
              source: 'character'
            });
            router.push(`/open-letter?${mockParams.toString()}`);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [router, character?.name, message, characterId, userSenderName]);

  return (
    <div className="min-h-screen flex flex-col items-center px-6" style={backgroundStyles.write}>
      <div className="w-full max-w-xs mt-12 text-center">
        <p className="text-[#4B2A1A] font-qiaopi text-lg font-bold mb-3">{character?.name || '对方'}正在给你回信...</p>
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
