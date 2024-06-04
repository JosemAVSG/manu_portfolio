'use client'
import { useState } from "react"
import Image from 'next/image'
import name from '@/assets/name.svg'
import nameblack from '@/assets/nameblack.svg'
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook"
import { setColor } from "@/redux/slice/colorSlice"
export default function Home() {
  // const [background, setBackground] = useState('black');
  const background = useAppSelector((state) => state.color.background);
  const colors = ['black','yellow','white','gray'];
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const changeBackground = () => {
      const nextIndex = (index + 1) % colors.length;
      
      // setBackground(colors[nextIndex]);
      setIndex(nextIndex);
      dispatch(setColor(colors[nextIndex]));
  };
  return (
    <main onClick={changeBackground} className={`flex min-h-screen  flex-col items-center justify-between p-24 transition-colors duration-500 `}  style={{ backgroundColor: background }}>
      <div>
        { background === 'black' || background === 'gray' ? <Image src={name} alt="name" width={350} height={302} /> : <Image src={nameblack} alt="name" width={350} height={302} /> } 
      </div>
    </main>
  );
}
