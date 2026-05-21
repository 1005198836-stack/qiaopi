'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Share2, FileText } from 'lucide-react';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { getChineseDate } from '@/lib/utils';
import { saveQiaopi, generateId, Qiaopi } from '@/stores/qiaopi';
import { backgroundStyles } from '@/lib/styles';

export default function LetterDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const senderName = searchParams.get('senderName') || '';
  const senderGender = searchParams.get('senderGender') || '';
  const senderHometown = searchParams.get('senderOrigin') || '';
  const senderLocation = searchParams.get('senderLocation') || '';
  const senderOccupation = searchParams.get('senderOccupation') || '';
  const senderRelation = searchParams.get('relationship') || '';
  const receiverName = searchParams.get('receiverName') || '';
  const receiverGender = searchParams.get('receiverGender') || '';
  const customMessage = searchParams.get('message') || '';

  const convertToClassicalStyle = (text: string): string => {
    const replacements: Record<string, string> = {
      '你': '汝',
      '你们': '汝等',
      '你呢': '汝乎',
      '你呀': '汝兮',
      '你啊': '汝哉',
      '我': '吾',
      '我们': '吾等',
      '我呢': '吾乎',
      '我呀': '吾兮',
      '他': '彼',
      '她': '彼',
      '它': '其',
      '他们': '彼等',
      '她们': '彼等',
      '它们': '其等',
      '的': '之',
      '了': '矣',
      '了啊': '矣哉',
      '了呢': '矣乎',
      '吗': '乎',
      '呢': '乎',
      '啊': '',
      '吧': '',
      '呀': '兮',
      '很': '甚',
      '非常': '甚为',
      '特别': '尤为',
      '十分': '甚',
      '格外': '愈',
      '想': '念',
      '想念': '思念',
      '思念': '思',
      '知道': '知晓',
      '知道了': '已知',
      '说': '言',
      '说道': '言曰',
      '告诉': '告知',
      '告诉了': '已告',
      '看见': '见',
      '看到': '见',
      '听到': '闻',
      '听见': '闻',
      '吃': '食',
      '吃饭': '进食',
      '喝': '饮',
      '喝水': '饮水',
      '住': '居',
      '住在': '居于',
      '走': '行',
      '走路': '行走',
      '来': '来',
      '来到': '来至',
      '去': '去',
      '去到': '去至',
      '好': '善',
      '不好': '不善',
      '平安': '安康',
      '健康': '康健',
      '快乐': '喜乐',
      '高兴': '欣悦',
      '开心': '欢心',
      '难过': '伤悲',
      '伤心': '伤悲',
      '生病': '抱恙',
      '病了': '抱恙',
      '工作': '营生',
      '上班': '营生',
      '生意': '生计',
      '钱': '银两',
      '金钱': '银两',
      '工资': '俸禄',
      '信': '书',
      '写信': '修书',
      '信里': '书中',
      '家里': '家中',
      '家里人': '家人',
      '现在': '今',
      '今天': '今日',
      '明天': '明日',
      '昨天': '昨日',
      '后天': '后日',
      '前天': '前日',
      '以后': '日后',
      '以前': '昔日',
      '时候': '时节',
      '时间': '时光',
      '地方': '处所',
      '事情': '诸事',
      '东西': '物件',
      '物品': '物件',
      '因为': '因',
      '因此': '故',
      '所以': '故',
      '但是': '然',
      '可是': '然',
      '虽然': '虽',
      '即使': '虽',
      '如果': '若',
      '假如': '若',
      '可以': '可',
      '可以的': '可也',
      '会': '将',
      '不会': '不',
      '不能': '不可',
      '要': '欲',
      '想要': '欲',
      '不要': '勿',
      '不必': '勿',
      '已经': '已',
      '已经了': '已然',
      '正在': '正',
      '还': '尚',
      '也': '亦',
      '就': '便',
      '都': '皆',
      '全部': '皆',
      '和': '与',
      '跟': '与',
      '同': '与',
      '一起': '一同',
      '给': '予',
      '给予': '予',
      '对': '对',
      '对于': '于',
      '向': '向',
      '朝着': '向',
      '从': '自',
      '自从': '自',
      '到': '至',
      '到达': '至',
      '在': '于',
      '存在': '在于',
      '有': '有',
      '没有': '无',
      '拥有': '有',
      '多': '甚多',
      '少': '甚少',
      '大': '甚',
      '小': '微',
      '自己': '自身',
      '自己的': '自身之',
      '别人': '他人',
      '别人的': '他人之',
      '朋友': '友人',
      '朋友们': '友人们',
      '家人': '亲人',
      '亲': '亲',
      '父母': '父母大人',
      '父亲': '父亲大人',
      '母亲': '母亲大人',
      '儿子': '儿',
      '女儿': '女',
      '丈夫': '夫',
      '妻子': '妻',
      '兄弟': '兄',
      '哥哥': '兄',
      '弟弟': '弟',
      '姐妹': '姐',
      '姐姐': '姐',
      '妹妹': '妹',
      '孩子': '儿女',
      '孩子们': '儿女们',
      '照顾': '照料',
      '照顾好': '善加照料',
      '关心': '关怀',
      '关心着': '关怀之',
      '帮助': '相助',
      '帮助过': '相助过',
      '感谢': '感激',
      '感谢你': '感激汝',
      '谢谢': '谢',
      '谢谢你': '谢汝',
      '对不起': '抱歉',
      '抱歉': '抱歉',
      '没关系': '无妨',
      '不要紧': '无妨',
      '再见': '再会',
      '拜拜': '再会',
      '回来': '归来',
      '回来吧': '归来兮',
      '回去': '归去',
      '回去吧': '归去兮',
      '离开': '离去',
      '离开吧': '离去兮',
      '等待': '等候',
      '等着': '等候',
      '希望': '盼',
      '期望': '盼',
      '期待': '期盼',
      '忘记': '忘却',
      '记得': '铭记',
      '记着': '铭记',
      '明白': '知晓',
      '理解': '懂得',
      '学习': '习',
      '努力': '勤勉',
      '努力学习': '勤勉而习',
      '成功': '成就',
      '失败': '失利',
      '开始': '起',
      '开始吧': '起兮',
      '结束': '终',
      '继续': '续',
      '继续吧': '续兮',
      '停止': '止',
      '爱': '爱',
      '喜欢': '喜',
      '爱上': '钟爱',
      '恨': '恨',
      '怕': '惧',
      '害怕': '惧',
      '担心': '牵挂',
      '担心着': '牵挂之',
      '放心': '安心',
      '生气': '恼怒',
      '发怒': '恼怒',
      '累': '疲惫',
      '疲倦': '疲惫',
      '困': '困倦',
      '困倦': '困倦',
      '饿': '饥',
      '饥饿': '饥',
      '渴': '渴',
      '口渴': '渴',
      '冷': '寒',
      '寒冷': '寒',
      '热': '热',
      '炎热': '热',
      '下雨': '降雨',
      '下雨了': '降雨矣',
      '晴天': '晴',
      '天晴': '晴',
      '阴天': '阴',
      '刮风': '起风',
      '刮风了': '起风矣',
      '下雪': '降雪',
      '下雪了': '降雪矣',
      '天气': '天时',
      '日子': '时日',
      '生活': '生计',
      '过得': '度日',
      '过得好': '度日安好',
      '过得不好': '度日艰难',
      '钱不够': '银两不足',
      '钱够': '银两充足',
      '身体': '身体',
      '身体好': '身体康健',
      '身体不好': '身体抱恙',
      '注意': '谨',
      '注意身体': '谨珍重身体',
      '保重': '珍重',
      '保重身体': '珍重身体',
      '平安无事': '平安无恙',
      '一切安好': '诸事顺遂',
      '万事如意': '诸事如意',
      '心想事成': '心想事成',
      '一帆风顺': '一帆风顺',
      '身体健康': '身体康健',
      '工作顺利': '营生顺遂',
      '生意兴隆': '生意兴隆',
      '财源广进': '财源广进',
      '阖家欢乐': '阖家欢乐',
      '幸福美满': '幸福美满',
      '吉祥如意': '吉祥如意',
      '岁岁平安': '岁岁平安',
      '年年有余': '年年有余',
    };

    let result = text;
    
    for (const [modern, classical] of Object.entries(replacements)) {
      result = result.replace(new RegExp(modern, 'g'), classical);
    }
    
    result = addClassicalPhrases(result);
    
    result = adjustSentenceStructure(result);
    
    return result;
  };

  const addClassicalPhrases = (text: string): string => {
    const phrasePatterns: Record<string, string> = {
      '勿牵挂': '勿以妾（夫）为念',
      '勿担心': '勿劳挂念',
      '勿念': '勿念',
      '平安': '安康',
      '安好': '安好',
      '保重': '善自珍重',
      '珍重': '珍重',
      '想念': '思念甚深',
      '思念': '思念甚切',
      '盼望': '期盼甚殷',
      '期待': '殷切期盼',
      '等待': '殷切等候',
      '归来': '早日归来',
      '回来': '早日归来',
      '相见': '早日相见',
      '见面': '早日相见',
      '保重身体': '善自珍重',
      '注意身体': '谨护身体',
      '身体健康': '身体康健',
      '一切顺利': '诸事顺遂',
      '万事如意': '诸事如意',
      '工作顺利': '营生顺遂',
    };

    let result = text;
    for (const [pattern, phrase] of Object.entries(phrasePatterns)) {
      result = result.replace(new RegExp(pattern, 'g'), phrase);
    }
    
    return result;
  };

  const adjustSentenceStructure = (text: string): string => {
    let result = text;
    
    result = result.replace(/^(.+?)，(.+?)。$/gm, '$1。$2。');
    
    result = result.replace(/^(.+?)！$/gm, '$1！');
    
    result = result.replace(/^(.+?)(乎|兮|哉)$/gm, '$1$2');
    
    if (!result.includes('兮') && !result.includes('哉') && !result.includes('乎')) {
      const sentences = result.split('。');
      if (sentences.length > 1) {
        const lastSentence = sentences[sentences.length - 1].trim();
        if (lastSentence && !lastSentence.endsWith('乎') && !lastSentence.endsWith('兮') && !lastSentence.endsWith('哉')) {
          sentences[sentences.length - 1] = lastSentence + '哉';
          result = sentences.join('。');
        }
      }
    }
    
    return result;
  };

  const generateContent = () => {
    const prefix = `${receiverName}如晤：`;
    
    let content = `${prefix}`;

    if (customMessage && customMessage.trim()) {
      const classicalMessage = convertToClassicalStyle(customMessage.trim());
      content += `

${classicalMessage}`;
    } else {
      content += `

离家数载，思念日深。近日身体尚安，家中可安好？

儿（夫）在外一切顺遂，勿念。此地 ${senderLocation} 虽繁华，然心系故土。
${senderHometown} 的山水，时时入梦。待来年清明，当回乡探望。

家中诸事，望汝（你）善自珍重。父母大人（或妻儿）身体康健否？
盼回信告知。`;
    }

    content += `

顺颂时祺

${senderName} 手书
${getChineseDate()}`;

    return content;
  };

  const handleSave = () => {
    const newQiaopi: Qiaopi = {
      id: generateId(),
      sender: {
        name: senderName,
        gender: senderGender,
        hometown: senderHometown,
        currentLocation: senderLocation,
        occupation: senderOccupation,
        relation: senderRelation
      },
      receiver: {
        name: receiverName,
        gender: receiverGender
      },
      content: generateContent(),
      createdAt: getChineseDate(),
      status: 'saved'
    };
    
    saveQiaopi(newQiaopi);
    alert('侨批已保存到信箱');
    router.push('/mailbox');
  };

  return (
    <div className="min-h-screen pb-24" style={backgroundStyles.writeLetter}>
      <Header title="信件详情" showBack onBack={() => router.back()} />
      
      <div className="px-4 pt-4">
        <div className="bg-white/90 rounded-2xl overflow-hidden">
          <div className="px-5 pt-5 pb-2">
            <div className="flex items-center justify-between mb-0">
              <div>
                <h2 className="text-qiaopi-red font-qiaopi text-xl font-bold">侨批</h2>
                <p className="text-gray-500 font-qiaopi text-xs mt-1">{getChineseDate()}</p>
              </div>
              <button className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-8 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-qiaopi-red" />
                </div>
                <span className="text-gray-400 text-[10px] font-qiaopi">分享</span>
              </button>
            </div>
          </div>

          <div className="px-5 py-2 border-b border-gray-100">
            <div className="flex items-center text-sm">
              <div className="flex-1 text-left px-1">
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">寄信人</span>
                <p className="text-gray-700 font-medium text-sm mt-1">{senderName || '—'}</p>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex-1 text-left px-1">
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">所在地</span>
                <p className="text-gray-700 font-medium text-sm mt-1">{senderLocation || '—'}</p>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex-1 text-left px-1">
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">关系</span>
                <p className="text-gray-700 font-medium text-sm mt-1">{senderRelation || '—'}</p>
              </div>
            </div>
          </div>

          <div className="px-5 py-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FAF7F2] rounded-lg p-3">
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">收信人</span>
                <p className="text-gray-700 font-medium text-sm mt-1">{receiverName || '—'}</p>
              </div>
              <div className="bg-[#FAF7F2] rounded-lg p-3">
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">收信地</span>
                <p className="text-gray-700 font-medium text-sm mt-1">{senderHometown || '—'}</p>
              </div>
            </div>
          </div>

          <div className="px-5 pb-4">
            <div className="bg-[#FAF7F2] rounded-xl p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <FileText className="w-3.5 h-3.5 text-qiaopi-red" />
                <span className="text-qiaopi-red font-qiaopi text-xs font-semibold">信件内容</span>
              </div>
              <pre className="text-gray-700 text-sm whitespace-pre-line leading-6" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
                {generateContent()}
              </pre>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSave}
            className="flex-1 py-4 bg-gradient-to-r from-qiaopi-red to-qiaopi-red/80 text-qiaopi-cream font-qiaopi text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            保存到信箱
          </button>
        </div>
      </div>
      
      <BottomNav currentPage="mailbox" />
    </div>
  );
}
