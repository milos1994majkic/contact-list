import CreateContact from '../components/molecules/CreateContact';
import ListItem from '../components/molecules/ListItem';

import { useEffect, useState } from 'react';
import { ContactsInterface, useData } from '../data/useData';
import Header from '../components/atoms/Header';
import Navbar from '../components/molecules/Navbar';
import SearchIcon from '../components/icons/SearchIcon';

export default function Home(): JSX.Element {
  const [contacts, setContacts] = useState<ContactsInterface[]>([]);

  useEffect(() => {
    setContacts(useData());
  });

  return (
    <>
      <Header />
      <div className='flex flex-col my-0 mx-auto w-fit mt-16'>
        <Navbar />
        <div className='mt-16 border-t-2 border-typeqast-user-image-blue'>
          <div className='flex justify-around'>
            <div className='flex'>
              <input
                id='search'
                type='text'
                className='w-homePageSearch mt-16 pl-16 border rounded border-1 border-typeqast-gray-form p-4 w-80 drop-shadow-xl focus:outline-none'
              />
              <div className='mt-20 ml-6 absolute z-10'>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className='flex w-homePageContent my-0 mx-auto w-fit mt-16'>
            <div className='flex flex-wrap'>
              <div className='flex-typeqast-flex'>
                <CreateContact />
              </div>
              {contacts.map((contact: ContactsInterface, index: number) => {
                return (
                  <div
                    className='flex-typeqast-flex hover:cursor-pointer'
                    key={index}
                  >
                    <ListItem
                      contactPicture={contact.profilePhoto}
                      contactText={contact.firstName + ' ' + contact.lastName}
                      contactId={contact.id}
                      contactFav={contact.favourite}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
