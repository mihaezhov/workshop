import { useState } from "react";
import neuro from "./assets/neuro.png";
import neuroDark from "./assets/neuro_dark.png";
import Star from "./star";

export default function Neuro() {
  const [isDark, setIsDark] = useState(true);
  return <div className="pt-[150px] mt-9 relative">
    <Star className="absolute top-0 left-10 w-5" />
    <Star className="absolute top-20 right-10 w-5" />
    <Star className="absolute bottom-10 left-10 w-5" />
    <div onClick={() => setIsDark(!isDark)} className={`${!isDark ? 'justify-start' : 'justify-end'} bg-[#1E1E1E] p-2 flex w-3xs h-20 transition-all duration-300 ease-in-out absolute bottom-10 left-1/2 cursor-pointer -translate-x-1/2 z-10`}>
      <div className={`aspect-square z-10 h-full ${!isDark ? 'bg-white' : 'bg-[#00FFF2]'} transition-colors duration-300 ease-in-out`}>
      </div>
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full">
      <img src={neuro} alt="neuro" className={`w-full absolute z-10 ${!isDark ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-in-out`} />
      <img src={neuroDark} alt="neuro" className="w-full absolute" />
    </div>
    <Light className={`${!isDark ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-in-out`} />
  </div>;
}

const Light = ({ className }: { className?: string }) => <svg viewBox="0 0 1847 1079" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <rect x="726.666" y="79" width="396" height="1032" fill="url(#paint0_linear_225_1063)" />
  <rect x="643.068" y="137.666" width="396" height="1032" transform="rotate(15.8428 643.068 137.666)" fill="url(#paint1_linear_225_1063)" />
  <rect x="814.666" y="167.459" width="396" height="1032" transform="rotate(-12.9075 814.666 167.459)" fill="url(#paint2_linear_225_1063)" />
  <rect x="649.504" y="13.666" width="396" height="1324.76" transform="rotate(29.3125 649.504 13.666)" fill="url(#paint3_linear_225_1063)" />
  <rect x="841.334" y="198.334" width="396" height="1324.76" transform="rotate(-30 841.334 198.334)" fill="url(#paint4_linear_225_1063)" />
  <defs>
    <linearGradient id="paint0_linear_225_1063" x1="924.666" y1="79" x2="924.666" y2="1111" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFF2" stop-opacity="0" />
      <stop offset="1" stop-color="#00FFF2" />
    </linearGradient>
    <linearGradient id="paint1_linear_225_1063" x1="841.068" y1="137.666" x2="841.068" y2="1169.67" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint2_linear_225_1063" x1="1012.67" y1="167.459" x2="1012.67" y2="1199.46" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFF2" stop-opacity="0" />
      <stop offset="1" stop-color="#00FFF2" />
    </linearGradient>
    <linearGradient id="paint3_linear_225_1063" x1="847.504" y1="13.666" x2="847.504" y2="1338.42" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFF2" stop-opacity="0" />
      <stop offset="1" stop-color="#00FFF2" />
    </linearGradient>
    <linearGradient id="paint4_linear_225_1063" x1="1039.33" y1="198.334" x2="1039.33" y2="1523.09" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
  </defs>
</svg>

