import React, { useState } from 'react';

interface Props {
  text: string;
  clicked: boolean;
}

export default function NavButton({ text, clicked }: Props) {
  return (
    <div
      className={`${
        clicked ? 'text-typeqast-blue-form' : 'text-typeqast-gray-form'
      } font-medium cursor-pointer`}
    >
      {text}
    </div>
  );
}
