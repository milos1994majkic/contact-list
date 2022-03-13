import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ContactsInterface } from '../../pages/utils/configLocalStorage';
import CloseIcon from '../icons/CloseIcon';
import DeleteIcon from '../icons/DeleteIcon';
import MailIcon from '../icons/MailIcon';
import PlusCircle from '../icons/PlusCircleIcon';
import ReturnIcon from '../icons/ReturnIcon';
import TelephoneIcon from '../icons/TelephoneIcon';
import UserIcon from '../icons/UserIcon';
import { PhoneProps } from '../organisms/EditForm';

interface Props {
  id?: string;
  fullName?: string;
  email?: string;
  phones?: PhoneProps[];
  submitted?: boolean;
  submittedFn?: Function;
}

export default function FormContent({
  id,
  fullName,
  email,
  phones,
  submitted,
  submittedFn,
}: Props) {
  const [fullNameInput, setFullNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phonesNameInput, setPhonesNameInput] = useState('');
  const [phonesLabelInput, setPhonesLabelInput] = useState('');

  useEffect(() => {
    submitted && submittedFn?.({
      fullNameInput,
      emailInput,
      phonesNameInput,
      phonesLabelInput,
    });
  }, [submitted]);

  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex justify-between'>
        <Link href='/'>
          <div>
            <ReturnIcon />
          </div>
        </Link>
        {id && (
          <div className='flex'>
            <p className='mr-3 text-typeqast-gray'>Delete</p>
            <DeleteIcon />
          </div>
        )}
      </div>
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
        placeholder={`${fullName ? fullName : 'Full Name'}`}
        className='border rounded border-1 border-typeqast-gray-form p-4 w-80'
        onChange={(event) => setFullNameInput(event.target.value)}
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
        placeholder={`${email ? email : 'Email'}`}
        className='border rounded border-1 border-typeqast-gray-form p-4 w-80'
        onChange={(event) => setEmailInput(event.target.value)}
      />
      <div className='flex border-t-2 border-typeqast-user-image-blue'>
        <div className='flex mt-4'>
          <TelephoneIcon />
          <strong className='ml-2 text-typeqast-blue'>numbers</strong>
        </div>
      </div>
      {(phones || [{ name: 'Number', label: 'Cell' }])?.map((p, i) => (
        <div className='flex justify-between items-center' key={i}>
          <input
            id='numbers'
            type='text'
            required
            placeholder={`${p ? p.name : 'Number'}`}
            className='mr-4 border rounded border-1 border-typeqast-gray-form p-4 w-80'
            onChange={(event) => setPhonesNameInput(event.target.value)}
          />
          <input
            id='cell'
            type='text'
            required
            placeholder={`${p ? p.label : 'Cell'}`}
            className='mr-4 border rounded border-1 border-typeqast-gray-form p-4 w-80'
            onChange={(event) => setPhonesLabelInput(event.target.value)}
          />
          <CloseIcon />
        </div>
      ))}
      <div className='flex'>
        <PlusCircle />
        <p className='ml-2 text-typeqast-blue'>Add number</p>
      </div>
    </div>
  );
}
