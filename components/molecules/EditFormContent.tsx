import React, { useState } from 'react';
import { PhoneProps } from '../organisms/EditForm';
import FormContent from './FormContent';

interface Props {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phones: PhoneProps[];
}

export default function EditFormContent({
  id,
  firstName,
  lastName,
  email,
  phones,
}: Props) {
  return (
    <FormContent
      id={id}
      fullName={firstName + ' ' + lastName}
      email={email}
      phones={phones}
    />
  );
}
