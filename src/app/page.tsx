"use client";

import { HeroSection } from "@/components/Home/HeroSection";
import { Header } from "@/components/partials/Header";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="flex ">
              <img src="../Images/lorem.png" alt="" />
              <h4 className="text-white pl-2 text-base	font-medium ">Lorem</h4>
            </div>
            <div onClick={() => toggleMenu()} className="cursor-pointer">
              <img
                className="block md:hidden"
                src="../Images/menu.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Header showMenu={showMenu} toggleMenu={toggleMenu} />
      <HeroSection />
      <div className="bg-[url('/Images/goal.png')]">
        <div className="flex justify-between py-2 text-white whitespace-nowrap overflow-x-hidden">
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
        </div>
      </div>

      <div className="container max-w-5xl mt-8 md:mt-24 mx-auto px-4">
        <div className="mt-4 md:mt-10 mb-8">
          <h1 className="text-3xl md:text-8xl text-white font-extrabold">
            LOREM IPSUM DOLOR SET
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <h3 className="font-bold mb-2 text-white">LOREM IPSUM DOLOR</h3>
            <p className="text-white opacity-70 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img className="mt-6" src="../Images/shield-tick.png" alt="" />
          </div>
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <h3 className="font-bold mb-2 text-white"> DOLOR SIT AMET</h3>
            <p className="text-white opacity-70 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img className="mt-6" src="../Images/dataflow-03.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap mt-10 mb-5 justify-end">
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <img src="../Images/deep.png" alt="" />
          </div>
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <h3 className="font-bold text-2xl text-white">LOREM IPSUM</h3>
            <p className="text-white opacity-70 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src="../Images/bar-chart.png" alt="" />
          </div>
        </div>

        <div className="mt-5 md:mt-24 mb-14">
          <h1 className="text-3xl md:text-7xl font-extrabold text-left md:text-center mt-8 text-white">
            LOREM IPSUM DOLOR
          </h1>
        </div>
      </div>

      <div className=" mb-5 bg-[url('/Images/goal.png')]">
        <div className="container max-w-5xl mt-4 mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <h3 className="text-white">LOREM IPSUM DOLOR SIT AMET</h3>
            <img src="../Images/plus.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-white opacity-70 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white">LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white">LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white">LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white">LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white">LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
