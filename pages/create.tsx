import Head from 'next/head';
import React from 'react';
import Header from '../components/atoms/Header';
import CreateForm from '../components/organisms/CreateForm';

export default function Create() {
  return (
    <>
      <Head>
        <title>Create Contact</title>
        <meta name='description' content='Create a new contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <CreateForm />
    </>
  );
}
