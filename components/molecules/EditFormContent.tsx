import React, { useState } from 'react';
import { PhoneProps } from '../organisms/EditForm';
import FormContent from './FormContent';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phones: PhoneProps[];
}

export default function EditFormContent({
  firstName,
  lastName,
  email,
  phones,
}: Props) {
  return (
    <FormContent
      fullName={firstName + ' ' + lastName}
      email={email}
      phones={phones}
    />
  );
}
