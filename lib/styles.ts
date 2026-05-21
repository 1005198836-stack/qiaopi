export const backgroundStyles = {
  writeLetter: {
    backgroundColor: '#C4A77D',
    backgroundImage: "url('/images/backgrounds/write-letter-bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.5s ease-in-out',
  },
  write: {
    backgroundColor: '#E8DCC4',
    backgroundImage: "url('/images/backgrounds/write-bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.5s ease-in-out',
  },
  cardMailbox: {
    backgroundColor: '#D4C4A8',
    backgroundImage: "url('/images/cards/card-mailbox-bg.png')",
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.3s ease-in-out',
  },
  cardWrite: {
    backgroundColor: '#D4C4A8',
    backgroundImage: "url('/images/cards/card-write-bg.png')",
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.3s ease-in-out',
  },
};

export const preloadImages = () => {
  const imageUrls = [
    '/images/backgrounds/write-letter-bg.png',
    '/images/backgrounds/write-bg.png',
    '/images/cards/card-mailbox-bg.png',
    '/images/cards/card-write-bg.png',
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};