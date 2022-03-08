import Link from 'next/link';
import React from 'react';
import PlusIcon from '../atoms/PlusIcon';

export default function () {
  return (
    <Link href='/create'>
      <div className='border border-dashed rounded-md border-typeqast-blue w-listItem h-listItem p-3 m-4 flex flex-col justify-center items-center hover:cursor-pointer'>
        <PlusIcon />
        <p className='text-typeqast-blue'>Add new</p>
      </div>
    </Link>
  );
}
