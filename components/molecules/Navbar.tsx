import React, { useState } from 'react';
import NavButton from '../atoms/NavButton';

interface Props {
  selectedButton: number;
  setSelectedButton: Function;
}

export default function Navbar({ selectedButton, setSelectedButton }: Props) {
  return (
    <div className='flex mx-auto w-fit'>
      <div
        className='mr-10'
        onClick={() => {
          setSelectedButton(0);
        }}
      >
        {' '}
        <NavButton
          text='All contacts'
          clicked={selectedButton === 0 ? true : false}
        />
      </div>
      <div className='mr-10 text-typeqast-listItem-image-gray'>|</div>
      <div
        onClick={() => {
          setSelectedButton(1);
        }}
      >
        <NavButton
          text='My favorites'
          clicked={selectedButton === 1 ? true : false}
        />
      </div>
    </div>
  );
}
