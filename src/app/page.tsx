'use client'
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook"
import { setColor } from "@/redux/slice/colorSlice"
import style from '@/styles/rainbow.module.scss'
import FallingTex from "@/components/FallingTex"
export default function Home() {
  // const [background, setBackground] = useState('black');
  const background = useAppSelector((state) => state.color.background);
  const colors = ['black','yellow','white','gray'];
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(false);
  const dispatch = useAppDispatch();
  const changeBackground = () => {
      const nextIndex = (index + 1) % colors.length;
      setIndex(nextIndex);
      dispatch(setColor(colors[nextIndex]));
      setAnimated(true);
  };

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setAnimated(false),1500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [animated]);
  

  const listItems = Array.from({ length: 5 }, (_, i) => (
    <li key={i} className={`${style.list} ${background === 'black' || background === 'gray' ? 'text-white': 'text-black' } ${animated ? style.animated : ''}  `}>manuel blanco</li>
  ));
  return (
      <main onClick={changeBackground} className={`flex p-1 min-h-screen   transition-colors duration-500 `}  style={{ backgroundColor: background }}> 
        <ul className={`${style.rainbowlist}`}>
         {listItems}         
        </ul>
        </main>
    // <main onClick={changeBackground} className={`flex p-1 min-h-screen   transition-colors duration-500 `}  style={{ backgroundColor: background }}>
    //   {/* <div className="flex justify-end items-end m-auto"> */}
    //    {/* </div> */}
    //   {/* <FallingTex></FallingTex> */}
    //     {/* { background === 'black' || background === 'gray' ? <Image src={name} alt="name" width={350} height={302.42} /> : <Image src={nameblack} alt="name" width={350} height={302.42} /> }  */}
      
    // </main>
  );
}
