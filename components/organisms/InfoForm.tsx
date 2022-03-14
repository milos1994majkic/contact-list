import React from 'react';
import Picture from '../atoms/Picture';
import InfoFormContent from '../molecules/InfoFormContent';
import { PhoneProps } from './EditForm';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  email: string;
  phones: PhoneProps[];
}

export default function InfoForm({
  id,
  profilePhoto,
  firstName,
  lastName,
  email,
  phones,
}: Props) {
  return (
    <div className='flex flex-col md:flex-row my-0 mx-auto w-fit mt-16'>
      <Picture contactPicture={profilePhoto} />
      <div className='ml-0 md:ml-10 mt-10'>
        <InfoFormContent
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phones={phones}
        />
      </div>
    </div>
  );
}
