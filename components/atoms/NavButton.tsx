import React, { useState } from 'react';

interface Props {
  text: string;
}

export default function NavButton({ text }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${
        selected ? 'text-typeqast-blue-form' : 'text-typeqast-gray-form'
      } font-medium cursor-pointer`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {text}
    </div>
  );
}
