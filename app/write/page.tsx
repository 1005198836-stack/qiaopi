'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { ChevronDown } from 'lucide-react';
import { backgroundStyles } from '@/lib/styles';

interface FormData {
  senderName: string;
  senderGender: string;
  senderOrigin: string;
  senderOccupation: string;
  senderLocation: string;
  receiverName: string;
  relationship: string;
  message: string;
}

export default function WritePage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    senderName: '',
    senderGender: '男',
    senderOrigin: '潮州',
    senderOccupation: '南洋橡胶园工人',
    senderLocation: '新加坡',
    receiverName: '',
    relationship: '母子',
    message: ''
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const requiredFields = ['senderName', 'senderGender', 'senderOrigin', 'senderOccupation', 'senderLocation', 'receiverName', 'relationship'];
    const hasEmpty = requiredFields.some(field => formData[field as keyof FormData] === '');
    if (hasEmpty) {
      alert('请填写完整信息');
      return;
    }
    
    const queryParams = new URLSearchParams(formData as unknown as Record<string, string>);
    router.push(`/generating?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen pb-24" style={backgroundStyles.writeLetter}>
      <Header title="写一封侨批" showBack onBack={() => router.back()} />
      
      <div className="px-6 pt-6">
        <div>
          <p className="text-[#4B2A1A] font-qiaopi text-lg font-bold text-center mb-6">填写信息，生成属于你的侨批</p>
          
          <div className="space-y-5">
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">你的名字</label>
              <input
                type="text"
                value={formData.senderName}
                onChange={(e) => handleChange('senderName', e.target.value)}
                placeholder="请输入你的名字"
                className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font placeholder:text-qiaopi-dark/40 focus:outline-none focus:border-qiaopi-brown/50 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">你的性别</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleChange('senderGender', '男')}
                  className={`flex-1 py-3 rounded-lg font-qiaopi text-base transition-all ${
                    formData.senderGender === '男'
                      ? 'bg-qiaopi-red text-white'
                      : 'bg-white/60 border border-qiaopi-brown/30 text-qiaopi-font'
                  }`}
                >
                  男
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('senderGender', '女')}
                  className={`flex-1 py-3 rounded-lg font-qiaopi text-base transition-all ${
                    formData.senderGender === '女'
                      ? 'bg-qiaopi-red text-white'
                      : 'bg-white/60 border border-qiaopi-brown/30 text-qiaopi-font'
                  }`}
                >
                  女
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">你的籍贯</label>
              <div className="relative">
                <select
                  value={formData.senderOrigin}
                  onChange={(e) => handleChange('senderOrigin', e.target.value)}
                  className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font focus:outline-none focus:border-qiaopi-brown/50 transition-all appearance-none pr-10"
                >
                  <option value="潮州">潮州</option>
                  <option value="汕头">汕头</option>
                  <option value="揭阳">揭阳</option>
                  <option value="梅州">梅州</option>
                  <option value="汕尾">汕尾</option>
                  <option value="惠州">惠州</option>
                  <option value="福建">福建</option>
                  <option value="其他">其他</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qiaopi-brown pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">你的身份</label>
              <div className="relative">
                <select
                  value={formData.senderOccupation}
                  onChange={(e) => handleChange('senderOccupation', e.target.value)}
                  className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font focus:outline-none focus:border-qiaopi-brown/50 transition-all appearance-none pr-10"
                >
                  <option value="南洋橡胶园工人">南洋橡胶园工人</option>
                  <option value="经商">经商</option>
                  <option value="种植">种植</option>
                  <option value="务工">务工</option>
                  <option value="教书">教书</option>
                  <option value="行医">行医</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qiaopi-brown pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">所在地区</label>
              <div className="relative">
                <select
                  value={formData.senderLocation}
                  onChange={(e) => handleChange('senderLocation', e.target.value)}
                  className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font focus:outline-none focus:border-qiaopi-brown/50 transition-all appearance-none pr-10"
                >
                  <option value="新加坡">新加坡</option>
                  <option value="马来西亚">马来西亚</option>
                  <option value="泰国">泰国</option>
                  <option value="印度尼西亚">印度尼西亚</option>
                  <option value="菲律宾">菲律宾</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qiaopi-brown pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">收件人的名字</label>
              <input
                type="text"
                value={formData.receiverName}
                onChange={(e) => handleChange('receiverName', e.target.value)}
                placeholder="请输入收件人的名字"
                className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font placeholder:text-qiaopi-dark/40 focus:outline-none focus:border-qiaopi-brown/50 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">和收信人的关系</label>
              <div className="relative">
                <select
                  value={formData.relationship}
                  onChange={(e) => handleChange('relationship', e.target.value)}
                  className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font focus:outline-none focus:border-qiaopi-brown/50 transition-all appearance-none pr-10"
                >
                  <option value="母子">母子</option>
                  <option value="父子">父子</option>
                  <option value="夫妻">夫妻</option>
                  <option value="兄弟姐妹">兄弟姐妹</option>
                  <option value="祖孙">祖孙</option>
                  <option value="其他">其他</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qiaopi-brown pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-qiaopi-font font-qiaopi text-sm mb-2">想对收信人说的话</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="告诉阿娘，我在这边一切都好，不用担心我。"
                rows={4}
                className="w-full px-4 py-3 bg-white/60 border border-qiaopi-brown/30 rounded-lg font-qiaopi text-qiaopi-font placeholder:text-qiaopi-dark/40 focus:outline-none focus:border-qiaopi-brown/50 transition-all resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={Object.values(formData).some(v => v === '')}
            className="w-full mt-6 py-3 rounded-xl font-qiaopi text-base transition-all bg-qiaopi-red text-qiaopi-cream hover:bg-qiaopi-red/80 disabled:bg-qiaopi-brown/30 disabled:text-qiaopi-dark/40 disabled:cursor-not-allowed"
          >
            生成侨批
          </button>
        </div>
      </div>
      
      <BottomNav currentPage="write" />
    </div>
  );
}
