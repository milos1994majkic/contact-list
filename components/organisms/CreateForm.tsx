import Link from 'next/link';
import React from 'react';
import FormButton from '../atoms/FormButton';
import Picture from '../atoms/Picture';
import FormContent from '../molecules/FormContent';

export default function Form() {
  return (
    <div className='flex my-0 mx-auto w-fit mt-16'>
      <Picture contactPicture='' />
      <div className='ml-10 mt-10'>
        <FormContent />
        <div className='flex justify-between mt-12'>
          <Link href='/'>
            <div>
              <FormButton text='Cancel' />
            </div>
          </Link>
          <FormButton text='Save' />
        </div>
      </div>
    </div>
  );
}
