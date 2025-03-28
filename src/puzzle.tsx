import { useEffect, useState } from 'react';
import BL from './arrows/bl';
import Bottom from './arrows/bottom';
import BR from './arrows/br';
import Left from './arrows/left';
import Right from './arrows/right';
import TL from './arrows/tl';
import Top from './arrows/top';
import TR from './arrows/tr';
import Star from './star';

const arrowComponents = [Top, Right, Bottom, Left, TL, TR, BL, BR];

export default function Puzzle() {
  const [arrowStates, setArrowStates] = useState<number[]>([]);
  const [solution, setSolution] = useState<number[]>([]);

  useEffect(() => {
    const randomSolution = Array.from({ length: 8 }, () => Math.floor(Math.random() * 8));
    setSolution(randomSolution);

    const initialStates = randomSolution.map(sol => {
      let randomState;
      do {
        randomState = Math.floor(Math.random() * 8);
      } while (randomState === sol);
      return randomState;
    });

    setArrowStates(initialStates);
  }, []);

  const rotateArrow = (index: number) => {
    setArrowStates(prev => {
      const newStates = [...prev];
      newStates[index] = (newStates[index] + 1) % 8;
      return newStates;
    });
  };

  const isCorrect = (index: number) => {
    return arrowStates[index] === solution[index];
  };

  const renderArrow = (index: number) => {
    if (arrowStates.length === 0) return null;

    const ArrowComponent = arrowComponents[arrowStates[index]];
    return (
      <div
        key={index}
        onClick={() => rotateArrow(index)}
        className="cursor-pointer flex items-center justify-center transition-all duration-200"
      >
        <ArrowComponent
          className={`w-[150px] h-[150px] transition-colors duration-300 ${isCorrect(index) ? 'text-[#00FFF2]' : 'text-white'}`}
        />
      </div>
    );
  };

  return (
    <div className="py-[100px] w-full flex flex-col items-center justify-center relative">
      <Star className="absolute top-10 left-10 w-5 h-5" />
      <Star className="absolute bottom-10 right-10 w-5 h-5" />
      <span className="text-2xl text-white uppercase font-bold mb-8">
        Шифр к мероприятию, сделай и запомни
      </span>

      <div className="grid grid-cols-4 grid-rows-2 gap-10 w-[80%]">
        {Array.from({ length: 8 }).map((_, i) => renderArrow(i))}
      </div>
    </div>
  );
}

