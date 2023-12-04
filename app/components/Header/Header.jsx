"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rotate as Hamburger } from "hamburger-react";
import styles from "./Header.module.css";
import { Menu } from "../Menu/Menu";
import { VscGithubAlt } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="
                  flex justify-between items-center
                  text-gray-300 border-b border-[#3e3e3e]
                  px-[10%] overflow-hidden"
      >
  <div
    className={`${styles.logoBox} flex justify-center items-center h-[50px] border-l border-r border-[#3e3e3e] w-[10%]`}
  >
    <Link href="/" className="block">
      <span className="font-extrabold ">DEV.</span>
    </Link>
  </div>
  <Link href='https://github.com/Capoverde'
        title='GitHub'
        target="_blank" 
        className="flex justify-center items-center h-[50px] border-r border-[#3e3e3e] w-[4%] z=[30]">
    <VscGithubAlt />
  </Link>
  <Link href="/ContactPage" className="grow self-center flex justify-center">
    <span className="contact inline-block">
      cont<strong>@</strong>ct
    </span>
  </Link>
  <Link href='https://www.facebook.com/profile.php?id=100092179127170'
        title='Facebook'
        target="_blank" 
        className="flex justify-center items-center h-[50px] border-l border-[#3e3e3e] w-[4%] z-[30]">
    <RiFacebookLine />
  </Link>
  <div className="hamburgerBox h-full border-r border-l border-[#3e3e3e] flex justify-center w-[10%]">
    <Hamburger
      className={`${styles.Hamburger}  sticky `}
      toggled={isOpen}
      toggle={setOpen}
    />
  </div>
</header>

      <Menu isOpen={isOpen} />
    </>
  );
};
