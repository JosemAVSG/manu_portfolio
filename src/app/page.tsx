"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { setColor } from "@/redux/slice/colorSlice";
import Hero from "@/components/Hero";
export default function Home() {
  const background = useAppSelector((state) => state.color.background);
  const colors = ["black", "yellow", "white", "gray"];
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const changeBackground = () => {
    const nextIndex = (index + 1) % colors.length;
    setIndex(nextIndex);
    dispatch(setColor(colors[nextIndex]));
  };
  return (
    <main
      onClick={changeBackground}
      className={`sm:flex p-1 min-h-screen overflow-y-hidden transition-colors duration-500 `}
      style={{ backgroundColor: background }}
    >
    <Hero></Hero>

    </main>
  );
}
