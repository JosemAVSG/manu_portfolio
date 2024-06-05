'use client'
import { useState } from "react"
// import Image from 'next/image'
// import name from '@/assets/name.svg'
// import nameblack from '@/assets/nameblack.svg'
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook"
import { setColor } from "@/redux/slice/colorSlice"
import style from '@/styles/rainbow.module.scss'
export default function Home() {
  // const [background, setBackground] = useState('black');
  const background = useAppSelector((state) => state.color.background);
  const colors = ['black','yellow','white','gray'];
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const changeBackground = () => {
      const nextIndex = (index + 1) % colors.length;
      setIndex(nextIndex);
      dispatch(setColor(colors[nextIndex]));
  };
  const listItems = Array.from({ length: 5 }, (_, i) => (
    <li key={i} className={` ${background === 'black' || background === 'gray' ? 'text-white': 'text-black' }  `}>manuel blanco</li>
  ));
  return (
    <main onClick={changeBackground} className={`flex items-center min-h-screen   transition-colors duration-500 `}  style={{ backgroundColor: background }}>
      <div className="m-auto">

        <ul className={`${style.rainbowlist}`}>
         {listItems}         
        </ul>
       </div>      
        {/* { background === 'black' || background === 'gray' ? <Image src={name} alt="name" width={350} height={302.42} /> : <Image src={nameblack} alt="name" width={350} height={302.42} /> }  */}
      
    </main>
  );
}
