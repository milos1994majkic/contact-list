import React, { useState } from 'react';
import { PhoneProps } from '../organisms/EditForm';
import FormContent from './FormContent';

interface Props {
  id?: string;
  firstName: string;
  lastName: string;
  profilePhoto?: string;
  email: string;
  favourite?: boolean;
  phones: PhoneProps[];
  submitEdit?: boolean;
}

export default function EditFormContent({
  id,
  firstName,
  lastName,
  profilePhoto,
  email,
  favourite,
  phones,
  submitEdit,
}: Props) {
  return (
    <FormContent
      id={id}
      fullName={firstName + ' ' + lastName}
      profilePhoto={profilePhoto}
      email={email}
      favourite={favourite}
      phones={phones}
      submitEdit={submitEdit}
    />
  );
}
