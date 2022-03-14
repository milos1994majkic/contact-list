import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import EditIcon from '../icons/EditIcon';
import HeartIcon from '../icons/HeartIcon';
import MailIcon from '../icons/MailIcon';
import ReturnIcon from '../icons/ReturnIcon';
import TelephoneIcon from '../icons/TelephoneIcon';
import { PhoneProps } from '../organisms/EditForm';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phones: PhoneProps[];
}

export default function InfoFormContent({
  id,
  firstName,
  lastName,
  email,
  phones,
}: Props) {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <div className='flex-col md:flex md:flex-row items-center justify-between'>
        <div className='flex justify-center md:flex items-center'>
          <Link href='/'>
            <div>
              <ReturnIcon />
            </div>
          </Link>
          <p className='ml-4 text-typeqast-gray-form text-2xl font-semibold tracking-wide	'>
            {firstName + ' ' + lastName}
          </p>
        </div>
        <div className='flex justify-center md:flex'>
          <HeartIcon />
          <div className='ml-8' onClick={() => {router.push(`/edit/${id}`)}}>
            <EditIcon />
          </div>
        </div>
      </div>
      <div className='mt-8 border-t-2 border-typeqast-user-image-blue'></div>
      <div className='ml-0 mt-12 md:ml-20'>
        <div className='flex mt-4'>
          <MailIcon />
          <strong className='ml-2 text-typeqast-blue'>email</strong>
          <p className='text-typeqast-gray ml-16'>{email}</p>
        </div>
        <div className='flex mt-12'>
          <TelephoneIcon />
          <strong className='ml-2 text-typeqast-blue'>numbers</strong>
          <div className='flex-row ml-9'>
            {phones?.map((n, i) => (
              <div className='flex justify-between text-typeqast-gray mb-8' key={i}>
                <p className='uppercase font-semibold'>{n.name}</p>
                <u className='ml-0 underline-offset-1 sm:ml-12'>+{n.label}</u>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
