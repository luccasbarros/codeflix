import Image from 'next/image';
import React from 'react';

export const UserProfile = () => (
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
);
