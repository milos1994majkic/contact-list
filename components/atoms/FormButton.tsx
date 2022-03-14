import React from 'react';

interface Props {
  text: string;
}

export default function FormButton({ text }: Props) {
  return (
    <button
      className={`w-full mb-4 h-9 md:w-40 ${
        text === 'Cancel' ? 'bg-typeqast-gray-form' : 'bg-typeqast-blue-form'
      } rounded-full text-white`}
    >
      {text}
    </button>
  );
}
