import Link from 'next/link';
import React, { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import MailIcon from '../icons/MailIcon';
import PlusCircle from '../icons/PlusCircleIcon';
import ReturnIcon from '../icons/ReturnIcon';
import TelephoneIcon from '../icons/TelephoneIcon';
import UserIcon from '../icons/UserIcon';

export default function CreateFormContent() {
  const [formData, setFormData] = useState<
    { fullName: string; email: string; numbers: string[]; cell: string }[]
  >([]);

  return (
    <div className='flex flex-col space-y-5'>
      <Link href='/'>
        <div>
          <ReturnIcon />
        </div>
      </Link>
      <div className='border-t-2 border-typeqast-user-image-blue'>
        <div className='flex mt-4'>
          <UserIcon />
          <strong className='ml-2 text-typeqast-blue'>full name</strong>
        </div>
      </div>
      <input
        id='fullName'
        type='text'
        required
        placeholder='Full Name'
        className='border rounded border-1 border-typeqast-gray-form p-4 w-80'
      />
      <div className='flex border-t-2 border-typeqast-user-image-blue'>
        <div className='flex mt-4'>
          <MailIcon />
          <strong className='ml-2 text-typeqast-blue'>email</strong>
        </div>
      </div>
      <input
        id='email'
        type='text'
        required
        placeholder='Email'
        className='border rounded border-1 border-typeqast-gray-form p-4 w-80'
      />
      <div className='flex border-t-2 border-typeqast-user-image-blue'>
        <div className='flex mt-4'>
          <TelephoneIcon />
          <strong className='ml-2 text-typeqast-blue'>numbers</strong>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <input
          id='numbers'
          type='text'
          required
          placeholder='Number'
          className='mr-4 border rounded border-1 border-typeqast-gray-form p-4 w-80'
        />
        <input
          id='cell'
          type='text'
          required
          placeholder='Cell'
          className='mr-4 border rounded border-1 border-typeqast-gray-form p-4 w-80'
        />
        <CloseIcon />
      </div>
      <div className='flex'>
        <PlusCircle />
        <p className='ml-2 text-typeqast-blue'>Add number</p>
      </div>
    </div>
  );
}
