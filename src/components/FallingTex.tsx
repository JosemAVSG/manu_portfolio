'use client'
import style from '@/styles/rainbow.module.scss'
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/reduxHook'

const FallingTex = () => {
  const background = useAppSelector((state) => state.color.background);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
      setAnimated(true);
  },[background])
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setAnimated(false),2500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [animated]);
  

  const listItems = Array.from({ length: 10 }, (_, i) => (
    <li key={i} className={`font-medium ${style.list} ${background === 'black' || background === 'gray' ? 'text-white': 'text-black' } ${animated ? style.animated : ''}  `}>manuel blanco</li>
  ));
  return (
    <ul className={` ${style.rainbowlist}`}>
    {listItems}         
   </ul>
   
  )
}

export default FallingTex
