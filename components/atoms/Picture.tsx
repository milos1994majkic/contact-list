import Image from 'next/image';
import React from 'react';
import defaultPicture from '../../data/typeqast-user-picture-blue.png';
import UploadIcon from '../icons/UploadIcon';

interface Props {
  contactPicture: string;
}

export default function Picture({ contactPicture }: Props) {
  return (
    <div className='flex'>
      <div className='w-formImage h-formImage border-4 border-solid border-typeqast-listItem-image-gray rounded-full'>
        <Image
          src={contactPicture ? contactPicture : defaultPicture}
          alt='user photo'
          width={175}
          height={175}
          className='rounded-full'
        />
      </div>
      {contactPicture ? (
        ''
      ) : (
        <div className='mt-user-image ml-user-image absolute z-10'>
          <UploadIcon />
        </div>
      )}
    </div>
  );
}
