import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/atoms/Header';
import InfoForm from '../../components/organisms/InfoForm';
import { ContactsInterface, dataAPI } from '../utils/configLocalStorage';

export default function info() {
  const [userContact, setUserContact] = useState({} as ContactsInterface);
  const router = useRouter();
  const id = router?.query['contactId'] as string;

  useEffect(() => {
    setUserContact(dataAPI().getById(id) || ({} as ContactsInterface));
  }, [router]);

  const { firstName, lastName, profilePhoto, email, phones } = userContact;

  return (
    <>
      <Header />
      <InfoForm
        id={id}
        firstName={firstName}
        lastName={lastName}
        profilePhoto={profilePhoto}
        email={email}
        phones={phones}
      />
    </>
  );
}
