"use client";
import React, { useState } from "react";

interface IProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<IProps> = ({ showMenu, toggleMenu }) => {
  return (
    <React.Fragment>
      {showMenu && (
        <div className="block md:hidden fixed top-0 left-0 right-0 z-50  w-full overflow-x-hidden overflow-y-hidden  h-full">
          <ul className="text-white bg-black h-full relative flex flex-col justify-center px-4">
            <li className="mt-4 pb-4">LOREM IPSUM</li>
            <li className="pb-4">LOREM IPSUM</li>
            <li className="pb-4">LOREM IPSUM</li>
            <li className="pb-4">LOREM IPSUM</li>
            <li className="pb-4">LOREM IPSUM</li>
            <li className="flex justify-between ">
              <div>
                <h1 className="text-white opacity-70">LOREM IPSUM</h1>
              </div>
              <div>
                <h1 className="text-white opacity-70">COMING SOON</h1>
              </div>
            </li>
            <li onClick={() => toggleMenu()} className="cursor-pointer">
              <img
                className="absolute top-[10px] right-[10px]"
                src="../Images/x-close.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};
