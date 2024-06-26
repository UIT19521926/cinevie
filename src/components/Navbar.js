
'use client'
import React, { useState, useContext } from 'react';
import Link from "next/link";
import { LogOutIcon, Search, SearchIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthContext from '@/context/AuthContext';

export default function Navbar() {
  const { userInfo } = useContext(AuthContext);   
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <nav className="h-20 w-full flex items-center justify-between px-8 md:px-20 text-white z-[9999] shadow-md">
      <div className=' flex flex-row justify-start items-center gap-x-8  w-[60%] '>
        <div className='flex flex-row justify-center items-center h-20 '>
          <Link href="/" passHref>
            <p className="font-extrabold text-3xl">CineVie</p>
          </Link>
        </div>
          <div className='px-10 mt-2'>
            <ul className="hidden md:flex gap-x-8 cursor-pointer font-medium">
              <Link href="/showtimes" passHref>
                <p className="hover:text-gray-600 cursor-pointer">Showtimes</p>
              </Link>
              <Link href="/cinemas" passHref>
                <p className="hover:text-gray-600 cursor-pointer">Cinemas</p>
              </Link>
              <Link href="/promotions-offers" passHref>
                <p className="hover:text-gray-600 cursor-pointer">Promotions & Offers</p>
              </Link>
              <Link href="/news" passHref>
                <p className="hover:text-gray-600 cursor-pointer">News</p>
              </Link>
              <Link href="/about-us" passHref>
                <p className="hover:text-gray-600 cursor-pointer">About Us</p>
              </Link>
            </ul>
        </div>
      
      
      </div>


      <div className="md:hidden flex justify-end items-end w-full ">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
          
          

      {isOpen && (
        <div className='flex w-auto  flex-col px-8 md:hidden z-[9999]  gap-y-4 top-20 absolute left-0 right-0 bg-white text-black p-4 shadow-md'>
          <div className="items-start gap-y-4  flex-col justify-between flex md:hidden">
          <div className="relative w-full">
              <div className='flex items-center w-full border border-gray-300 rounded-lg'>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 p-2 pl-10 rounded-xl bg-white text-gray-500 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="w-[1.2rem] h-[1.2rem] mr-2 text-gray-500" />
                </div>
              </div>
            </div>
            
            
          </div>

          <ul className="flex w-auto flex-col gap-y-4 top-20  left-0 right-0 text-black text-lg">
              <Link href="/showtimes" passHref>
                <p className="hover:text-gray-600 cursor-pointer ">Showtimes</p>
              </Link>
              <Link href="/cinemas" passHref>
                <p className="hover:text-gray-600 cursor-pointer">Cinemas</p>
              </Link>
              <Link href="/promotions-offers" passHref>
                <p className="hover:text-gray-600 cursor-pointer">Promotions & Offers</p>
              </Link>
              <Link href="/news" passHref>
                <p className="hover:text-gray-600 cursor-pointer">News</p>
              </Link>
              <Link href="/about-us" passHref>
                <p className="hover:text-gray-600 cursor-pointer">About Us</p>
              </Link>
            </ul>

            <div className=' border-t-2' />

            <div className=' flex flex-row justify-between items-center'>
              {userInfo ? (
                <Link href="/settings" passHref>
                  <div className="flex flex-row gap-x-4 items-center w-10 h-10 rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className=' font-bold text-xl'>{userInfo?.username}</p>
                  </div>

                </Link>
              ) : (
                <div className="flex gap-x-2">
                  <Link href="/login" passHref>
                    <p className="text-black text-xl font-semibold rounded-xl hover:bg-gray-500">Log in</p>
                  </Link>
                </div>
              )}

              <div>
                <LogOutIcon className='w-6 h-6 cursor-pointer'/>
              </div>

            </div>
      </div>
        
      )}

      

      <div className="items-center gap-4 md:gap-x-8 md:flex hidden ">
        <div className="relative">
          <div className='flex items-center w-42'>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 pl-10 rounded-xl bg-gray-800 text-gray-300 focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-[1.2rem] h-[1.2rem] mr-2 text-gray-300" />
            </div>
          </div>
        </div>

        

        {userInfo ? (
          <Link href="/settings" passHref>
            <div className="flex gap-x-2 items-center w-10 h-10 rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </Link>
        ) : (
          <div className="md:flex gap-x-2">
            <Link href="/login" passHref>
              <button className="text-white border font-semibold px-6 py-2 rounded-full hover:bg-gray-500">Log in</button>
            </Link>
            <Link href='/signup' passHref>
              <button className="text-white font-semibold px-6 py-2 rounded-full color-1">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
      
    </nav>
  );
}
