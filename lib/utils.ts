import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

export function getChineseDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  
  const chineseDigits = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const chineseYear = year.toString().split('').map(digit => chineseDigits[parseInt(digit)]).join('');
  
  const months = ['', '一月', '二月', '三月', '四月', '五月', '六月', 
                 '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const days = ['', '一日', '二日', '三日', '四日', '五日', '六日', '七日', 
               '八日', '九日', '十日', '十一日', '十二日', '十三日', '十四日', '十五日',
               '十六日', '十七日', '十八日', '十九日', '二十日', '廿一日', '廿二日', '廿三日',
               '廿四日', '廿五日', '廿六日', '廿七日', '廿八日', '廿九日', '三十日'];
  
  return `${chineseYear}年${months[month]}${days[day]}`;
}
