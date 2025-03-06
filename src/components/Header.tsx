'use client';
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-4'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt='netflix'
          width={128}
          height={120}
        />
        <ul className='hidden space-x-4 md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <Image
          className='cursor-pointer rounded'
          src='/profile.png'
          alt='profile'
          width={24}
          height={24}
        />
      </div>
    </header>
  );
}
