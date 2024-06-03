'use client'
import { useState } from "react"
export default function Home() {
  const [background, setBackground] = useState('black');

  const changeBackground = () => {
    const colors = ['black','yellow','white','gray'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackground(randomColor);
  };
  return (
    <main onClick={changeBackground} className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors duration-500 `}  style={{ backgroundColor: background }}>
      <div className="stacked-text">
        manuel blanco
    </div>



    </main>
  );
}
