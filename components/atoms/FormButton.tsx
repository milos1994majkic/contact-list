import React from 'react';

interface Props {
  text: string;
}

export default function FormButton({ text }: Props) {
  return (
    <button
      className={`h-9 w-40 ${
        text === 'Cancel' ? 'bg-typeqast-gray-form' : 'bg-typeqast-blue-form'
      } rounded-full text-white`}
    >
      {text}
    </button>
  );
}
