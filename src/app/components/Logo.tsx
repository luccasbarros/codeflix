'use client';
import Image from 'next/image';
import React from 'react';

export const Logo = () => (
  <Image
    src='/netflix.svg'
    alt='logo'
    width={90}
    height={90}
    className='cursor-pointer'
  />
);
