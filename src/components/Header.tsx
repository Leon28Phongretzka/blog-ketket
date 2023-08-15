"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from '../../public/maket.png'
import { FaHome } from 'react-icons/fa'

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/series1",
    name: "Series 1",
  },
  {
    path: "/series2",
    name: "Series 2",
  },
  {
    path: "/other",
    name: "Other Posts",
  },
  {
    path: '/credit',
    name: 'Credit',
  }
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (

    <div className="border border-stone-800/90 rounded-md mb-12 z-10 bg-stone-900/80 backdrop-blur-md bg-blue-400 fixed w-full divide-y divide-neutral-600">
        <div className='flex flex-col'>
            <div className='px-4 py-4 flex flex-row'>
                <div className='flex flex-row items-center gap-x-2'>
                    <Link href='/' className='flex flex-row items-center gap-x-2'>
                        <Image 
                            src={logo} 
                            width={60} 
                            height={60} 
                            alt="Picture of the developer" 
                            className='rounded-full w-[60px] h-[60px]'
                        />
                        <p className='text-[36px] font-extrabold'>Kết Kết&apos;s Blog</p>
                    </Link>
                </div>
            </div>
        </div>
        <nav className="flex gap-2 px-4 py-4 h-[80px] relative justify-start items-center w-full z-10 rounded-lg">
            {navItems.map((item, index) => {
            const isActive = item.path === pathname;
            return (
                <Link
                    key={item.path}
                    className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                        isActive ? "text-zinc-100" : "text-zinc-400"
                    }`}
                    data-active={isActive}
                    href={item.path}
                    onMouseOver={() => setHoveredPath(item.path)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                    <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                        width: "100%",
                    }}
                    transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                    }}
                    />
                )}
                </Link>
          );
        })}
      </nav>
    </div>
  );
}