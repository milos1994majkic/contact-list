import Link from 'next/link';
import React from 'react';
import FormButton from '../atoms/FormButton';
import Picture from '../atoms/Picture';
import EditFormContent from '../molecules/EditFormContent';

export interface PhoneProps {
  name: string;
  label: string;
}

interface Props {
  firstName: string;
  lastName: string;
  profilePhoto: string;
  email: string;
  phones: PhoneProps[];
}

export default function EditForm({
  profilePhoto,
  firstName,
  lastName,
  email,
  phones,
}: Props) {
  return (
    <div className='flex my-0 mx-auto w-fit mt-16'>
      <Picture contactPicture={profilePhoto} />
      <div className='ml-10 mt-10'>
        <EditFormContent
          firstName={firstName}
          lastName={lastName}
          email={email}
          phones={phones}
        />
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
