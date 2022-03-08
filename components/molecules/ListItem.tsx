import React, { useState } from 'react';
import Image from 'next/image';
import HeartIcon from '../atoms/HeartIcon';
import EditIcon from '../atoms/EditIcon';
import DeleteIcon from '../atoms/DeleteIcon';
import HeratIconFilled from '../atoms/HeratIconFilled';
import Link from 'next/link';

interface Props {
  contactPicture: string;
  contactText: string;
  contactId: string;
}

export default function ListItem({
  contactPicture,
  contactText,
  contactId,
}: Props) {
  const [fav, setFav] = useState(false);

  return (
    <div className='border border-solid rounded-md border-typeqast-blue w-listItem h-listItem p-3 m-4'>
      <div className='flex justify-between'>
        <div className='column itemCol15'>
          <span onClick={() => setFav(!fav)}>
            {fav ? <HeratIconFilled /> : <HeartIcon />}
          </span>
        </div>
        <Link href={`/info/${contactId}`}>
          <div className='column itemCol60'>
            <div className='p-2 ml-6'>
              <div className='w-listItemImage h-listItemImage border-2 border-solid border-typeqast-listItem-image-gray rounded-full'>
                <Image
                  src={contactPicture}
                  alt='user photo'
                  width={75}
                  height={75}
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        </Link>
        <div className='column itemCol25'>
          <div className='flex'>
            <Link href='/edit' passHref>
              <span>
                <EditIcon />
              </span>
            </Link>
            <Link href='/delete' passHref>
              <span>
                <DeleteIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1 className='capitalize text-typeqast-gray'>{contactText}</h1>
      </div>
    </div>
  );
}
