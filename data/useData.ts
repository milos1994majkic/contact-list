import contacts from '../data/contacts.json';

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

export const useData = () => {
  if (localStorage.getItem('contacts') === null) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  return contacts;
};
