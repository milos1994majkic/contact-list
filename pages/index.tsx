import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CreateContact from '../components/molecules/CreateContact';
import ListItem from '../components/molecules/ListItem';
import styles from '../styles/Home.module.css';

import contacts from '../data/contacts.json';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home(): JSX.Element {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  return (
    <div className='container'>
      <div className='flex flex-wrap'>
        <div className='flex-typeqast-flex'>
          <CreateContact />
        </div>
        {contacts.map((contact, index) => {
          return (
            <div
              className='flex-typeqast-flex hover:cursor-pointer'
              key={index}
            >
              <ListItem
                contactPicture={contact.profilePhoto}
                contactText={contact.firstName + ' ' + contact.lastName}
                contactId={contact.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
