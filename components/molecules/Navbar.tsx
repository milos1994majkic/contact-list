import React from 'react';
import NavButton from '../atoms/NavButton';

export default function Navbar() {
  return (
    <div className='flex mx-auto w-fit'>
      <div className='mr-10'>
        <NavButton text='All contacts' />
      </div>
      <div className='mr-10 text-typeqast-listItem-image-gray'>|</div>
      <div>
        <NavButton text='My favorites' />
      </div>
    </div>
  );
}
