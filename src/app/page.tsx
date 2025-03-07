import Header from '@/app/components/Header';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-t from-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.png'
              alt='MAID'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>MAID</h1>

          <p className='text-shadow-md tex-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <PlayIcon className='h-6' />
            Play
          </button>
          <button className='md:text-xl; chttp://localhost:3000/ursor-pointer flex items-center gap-x-2 rounded bg-gray-300 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className='h-6' />
            More info
          </button>
        </div>
      </main>
    </div>
  );
}
