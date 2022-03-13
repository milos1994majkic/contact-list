import Link from 'next/link';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dataAPI } from '../../pages/utils/configLocalStorage';
import FormButton from '../atoms/FormButton';
import Picture from '../atoms/Picture';
import FormContent from '../molecules/FormContent';

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const formData = (data: {
    fullNameInput: string;
    emailInput: string;
    phonesNameInput: string;
    phonesLabelInput: string;
  }) => {
    const id = uuidv4();
    const [firstName, lastName] = data.fullNameInput.split(' ');
    const profilePhoto = 'https://picsum.photos/200/200';
    const email = data.emailInput;
    const favourite = false;
    const phones = [
      {
        name: data.phonesNameInput,
        label: data.phonesLabelInput,
      },
    ];
    dataAPI().saveContact({
      id,
      firstName,
      lastName,
      profilePhoto,
      email,
      favourite,
      phones,
    });
  };

  return (
    <div className='flex my-0 mx-auto w-fit mt-16'>
      <Picture contactPicture='' />
      <div className='ml-10 mt-10'>
        <FormContent submitted={submitted} submittedFn={formData} />
        <div className='flex justify-between mt-12'>
          <Link href='/'>
            <div>
              <FormButton text='Cancel' />
            </div>
          </Link>
          <div>
            <Link href='/'>
              <div
                onClick={() => {
                  setSubmitted(true);
                }}
              >
                <FormButton text='Save' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
