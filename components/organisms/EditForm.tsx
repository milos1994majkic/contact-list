import Link from 'next/link';
import React, { useState } from 'react';
import FormButton from '../atoms/FormButton';
import Picture from '../atoms/Picture';
import EditFormContent from '../molecules/EditFormContent';

export interface PhoneProps {
  name: string;
  label: string;
}

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  email: string;
  favourite: boolean;
  phones: PhoneProps[];
}

export default function EditForm({
  id,
  profilePhoto,
  firstName,
  lastName,
  email,
  favourite,
  phones,
}: Props) {
  const [submitEdit, setSubmitEdit] = useState(false);

  return (
    <div className='flex my-0 mx-auto w-fit mt-16'>
      <Picture contactPicture={profilePhoto} />
      <div className='ml-10 mt-10'>
        <EditFormContent
          id={id}
          firstName={firstName}
          lastName={lastName}
          profilePhoto={profilePhoto}
          email={email}
          favourite={favourite}
          phones={phones}
          submitEdit={submitEdit}
        />
        <div className='flex justify-between mt-12'>
          <Link href='/'>
            <div>
              <FormButton text='Cancel' />
            </div>
          </Link>
          <div onClick={() => setSubmitEdit(true)}>
            <FormButton text='Save' />
          </div>
        </div>
      </div>
    </div>
  );
}
