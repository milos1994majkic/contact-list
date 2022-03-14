import { useEffect, useState } from 'react';
import { ContactsInterface, dataAPI } from './utils/configLocalStorage';
import CreateContact from '../components/molecules/CreateContact';
import ListItem from '../components/molecules/ListItem';
import Header from '../components/atoms/Header';
import Navbar from '../components/molecules/Navbar';
import SearchIcon from '../components/icons/SearchIcon';
import Head from 'next/head';

export default function Home(): JSX.Element {
  const [allContacts, setAllContacts] = useState([] as ContactsInterface[]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    selectedButton === 0
      ? setAllContacts(dataAPI().getAllContacts())
      : setAllContacts(dataAPI().getAllFavs());
  }, [selectedButton, searchInput]);
  return (
    <>
      <Head>
        <title>All Contacts</title>
        <meta name='description' content='Browse a list of contacts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='w-9/12 flex flex-col my-0 mx-auto mt-16'>
        <Navbar
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <div className='mt-16 border-t-2 border-typeqast-user-image-blue'>
          <div className='flex justify-around'>
            <div className='flex'>
              <input
                id='search'
                type='text'
                className='w-fit mx-4 sm:w-searchInput mt-16 pl-16 border rounded border-1 border-typeqast-gray-form p-4 drop-shadow-xl focus:outline-none'
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
              />
              <div className='mt-20 ml-6 absolute z-10'>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className='flex my-0 mx-auto w-fit mt-16'>
            <div className='flex flex-wrap'>
              <div className='flex-flex-100 sm:flex-typeqast-flex'>
                <CreateContact />
              </div>
              {allContacts
                .filter((contact) => {
                  if (
                    contact.firstName
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    contact.lastName
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    contact.email
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                    return contact;
                })
                .map((contact: ContactsInterface, index: number) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    profilePhoto,
                    favourite,
                  } = contact;

                  return (
                    <div
                      className='flex-typeqast-flex hover:cursor-pointer'
                      key={index}
                    >
                      <ListItem
                        contactPicture={profilePhoto}
                        contactText={firstName + ' ' + lastName}
                        contactId={id}
                        contactFav={favourite}
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
