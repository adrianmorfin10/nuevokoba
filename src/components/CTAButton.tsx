'use client';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
  primary?: boolean;
  small?: boolean;
  position?: 'over-image';
  className?: string;
}

const CTAButton = ({ 
  text, 
  onClick, 
  primary = false, 
  small = false, 
  position, 
  className = '' 
}: CTAButtonProps) => {
  const formatText = (text: string) => {
    return text.split(' ').map(word => {
      const firstLetter = word.charAt(0);
      const rest = word.slice(1);
      return `<span><span style="color: #FFFFFF">${firstLetter}</span><span style="color: white">${rest}</span></span>`;
    }).join(' ');
  };

  return (
    <button
      onClick={onClick}
      style={{ fontFamily: 'Play, sans-serif' }}
      className={`
        ${position === 'over-image' ? 'absolute bottom-4 right-4' : ''}
        ${primary ? 
          'bg-gradient-to-r from-[#FF4646] to-[#FF6B6B] hover:from-[#E03E3E] hover:to-[#FF5757] rounded-tl-[15px]' : 
          'bg-[#FF4646]/15 rounded-none'
        }
        ${small ? 'px-6 py-2 text-sm' : 'px-6 py-3 text-base'}
        text-white
        font-bold
        transition-all
        duration-200
        transform
        hover:scale-105
        focus:outline-none
        focus:ring-2
        focus:ring-[#FF4646]
        focus:ring-opacity-50
        shadow-lg
        hover:shadow-[#FF4646]/30
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
    />
  );
};

export default CTAButton;