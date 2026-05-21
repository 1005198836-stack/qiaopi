export interface SenderInfo {
  name: string;
  gender: string;
  hometown: string;
  currentLocation: string;
  occupation: string;
  relation: string;
}

export interface ReceiverInfo {
  name: string;
  gender: string;
}

export interface Qiaopi {
  id: string;
  sender: SenderInfo;
  receiver: ReceiverInfo;
  content: string;
  createdAt: string;
  status: 'draft' | 'generated' | 'saved';
}

export interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
  background: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export const characters: Character[] = [
  {
    id: 'shurou',
    name: '淑柔',
    avatar: '',
    description: '七夕当夜，你衣锦归来，仍是少年模样',
    background: '南洋华侨家人'
  },
  {
    id: 'musheng',
    name: '木生',
    avatar: '',
    description: '江海万里，心中念你，便不觉遥远',
    background: '潮汕华侨家人'
  },
  {
    id: 'nanzhi',
    name: '南枝',
    avatar: '',
    description: '与你们夫妻结缘，是我三生有幸',
    background: '思念故乡'
  }
];

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: '首页', icon: 'home', path: '/' },
  { id: 'write', label: '写信', icon: 'write', path: '/write' },
  { id: 'mailbox', label: '信箱', icon: 'mailbox', path: '/mailbox' },
  { id: 'profile', label: '我的', icon: 'profile', path: '/profile' }
];

export const mockQiaopiList: Qiaopi[] = [
  {
    id: '1',
    sender: {
      name: '陈阿福',
      gender: '男',
      hometown: '潮州',
      currentLocation: '新加坡',
      occupation: '经商',
      relation: '丈夫'
    },
    receiver: {
      name: '林淑莲',
      gender: '女'
    },
    content: '莲妻如晤：\n\n离家数载，思念日深。近日生意尚好，家中可安否？父母大人身体康健否？\n\n儿已长大，望汝善加教诲。待来年清明，当回乡探望。\n\n顺颂时祺\n\n夫 阿福 手书\n民国二十五年四月'
    ,
    createdAt: '2024-05-20 14:30',
    status: 'saved'
  },
  {
    id: '2',
    sender: {
      name: '李明远',
      gender: '男',
      hometown: '梅州',
      currentLocation: '马来西亚',
      occupation: '种植',
      relation: '儿子'
    },
    receiver: {
      name: '李父',
      gender: '男'
    },
    content: '父亲大人膝下：\n\n敬禀者，儿自离家以来，一切尚好。此地气候温热，物产丰饶。\n\n儿已学会种植橡胶，收入尚可。家中田地收成如何？母亲大人安好否？\n\n儿在外一切谨慎，请父母勿念。\n\n不孝子 明远 叩上\n民国二十六年三月'
    ,
    createdAt: '2024-05-18 09:15',
    status: 'saved'
  },
  {
    id: '3',
    sender: {
      name: '张翠英',
      gender: '女',
      hometown: '揭阳',
      currentLocation: '泰国',
      occupation: '纺织',
      relation: '女儿'
    },
    receiver: {
      name: '张母',
      gender: '女'
    },
    content: '母亲大人：\n\n女儿在此一切安好，勿念。\n\n近来学得一手好针线，可自食其力。家中弟妹可好？\n\n待积攒些银两，当寄回家中。\n\n女儿 翠英 谨启\n民国二十四年冬月'
    ,
    createdAt: '2024-05-15 16:45',
    status: 'saved'
  }
];

export let savedQiaopiList: Qiaopi[] = [...mockQiaopiList];

export function saveQiaopi(qiaopi: Qiaopi): void {
  savedQiaopiList = [qiaopi, ...savedQiaopiList];
}

export function getQiaopiList(): Qiaopi[] {
  return savedQiaopiList;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
