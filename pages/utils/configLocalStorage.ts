import { useRouter } from 'next/router';
import contacts from '../../data/contacts.json';

export interface ContactsInterface {
  id: string;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  email: string;
  favourite: boolean;
  phones: {
    name: string;
    label: string;
  }[];
}

const contactsKey = 'contacts';

export const dataAPI = () => {
  if (!localStorage.getItem(contactsKey)) {
    localStorage.setItem(contactsKey, JSON.stringify(contacts));
  }

  const getAllContacts = (): ContactsInterface[] =>
    JSON.parse(localStorage.getItem(contactsKey) || '[]');

  const getAllFavs = (): ContactsInterface[] =>
    getAllContacts().filter((contact) => contact.favourite === true);

  const getById = (id: string): ContactsInterface | undefined =>
    getAllContacts().find((contact) => contact.id === id);

  const saveAll = (contacts: ContactsInterface[]) => {
    localStorage.setItem(contactsKey, JSON.stringify(contacts));
  };

  const saveContact = (updatedContact: ContactsInterface) => {
    const allContacts = getAllContacts();
    const contact = allContacts.find(
      (contact) => contact.id === updatedContact.id,
    );

    if (!contact) {
      allContacts.push(updatedContact);
      saveAll(allContacts);
      return;
    }

    Object.assign(contact, updatedContact);
    saveAll(allContacts);
  };

  const deleteContact = (contactId: string) => {
    const allContacts = getAllContacts();
    const newContacts = allContacts.filter(
      (item: any) => item.id !== contactId,
    );
    localStorage.setItem(contactsKey, JSON.stringify(newContacts));
    window.location.reload();
  };

  return {
    getAllContacts,
    getAllFavs,
    getById,
    saveAll,
    saveContact,
    deleteContact,
  };
};
