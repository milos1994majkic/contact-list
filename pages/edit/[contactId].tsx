import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/atoms/Header';
import EditForm from '../../components/organisms/EditForm';
import { ContactsInterface, dataAPI } from '../utils/configLocalStorage';

export default function edit() {
  const [userContact, setUserContact] = useState({} as ContactsInterface);
  const router = useRouter();
  const id = router?.query['contactId'] as string;

  useEffect(() => {
    setUserContact(dataAPI().getById(id) || ({} as ContactsInterface));
  }, [router]);

  const {
    firstName,
    lastName,
    profilePhoto,
    email,
    phones,
    favourite,
  } = userContact;

  return (
    <>
      <Head>
        <title>Edit</title>
        <meta name='description' content='Edit a contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <EditForm
        id={id}
        firstName={firstName}
        lastName={lastName}
        profilePhoto={profilePhoto}
        email={email}
        favourite={favourite}
        phones={phones}
      />
    </>
  );
}
