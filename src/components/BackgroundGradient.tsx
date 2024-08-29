"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className="flex flex-col justify-center items-center text-center  ">
        <h1 className="text-2xl lg:text-6xl font-bold text-white pb-4">Testimonials</h1>
    <div className="h-full flex flex-col gap-4 lg:gap-6 lg:flex-row justify-center items-end">
      
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10  bg-zinc-900 ">
        <Image
          src={'/me2.png'}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Mohd Ali Jasim
        </p>

        <p className="text-sm  text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10  bg-zinc-900 ">
        <Image
          src={'/me2.png'}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Mohd Ali Jasim
        </p>

        <p className="text-sm  text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10  bg-zinc-900 ">
        <Image
          src={'/me2.png'}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Mohd Ali Jasim
        </p>

        <p className="text-sm  text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        
      </BackgroundGradient>
    </div>
    </div>

  );
}
