# 侨批生成器 - 图片资源说明

## 图片添加方式

### 1. 将图片放入 public 目录
将你切好的图片文件放到这个目录下：
```
qiaopi-h5-ai/public/
```

建议的文件结构：
```
public/
├── images/
│   ├── home-background.jpg    # 首页背景图
│   ├── paper-texture.jpg      # 信纸纹理
│   ├── stamp.png             # 印章图片
│   └── characters/            # 角色头像
│       ├── shulian.jpg
│       ├── musheng.jpg
│       └── nanzhi.jpg
└── ...
```

### 2. 在代码中引用图片

引用格式：
```jsx
// 引用根目录下的图片
<img src="/background.jpg" alt="" />

// 引用子目录下的图片
<img src="/images/home-background.jpg" alt="" />
```

### 3. 首页图片位置说明

在 `app/page.tsx` 中已预留图片位置：

**背景图：** 第14-15行，取消注释并替换图片路径
```jsx
<img src="/background.jpg" className="w-full h-full object-cover" alt="" />
```

### 4. 其他页面图片预留

后续其他页面也会按同样方式添加图片预留位置，你只需：
1. 放入图片到 `/public/` 目录
2. 在代码中取消注释并替换图片路径

## 建议的图片规格

- **背景图：** 建议宽度 750px - 1080px，高度自适应
- **图标/装饰：** 建议使用 PNG 格式，支持透明背景
- **头像：** 建议 200x200px 的正方形图片
- **整体风格：** 复古、怀旧、胶片质感的图片更适合侨批主题

## 命名规范

建议使用有意义的文件名：
- `home-bg.jpg` - 首页背景
- `letter-paper.jpg` - 信纸背景
- `stamp-qiaopi.png` - 侨批印章
- `avatar-shulian.jpg` - 淑莲头像