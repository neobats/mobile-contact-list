import { v4 as uuid } from 'uuid';
import { ApiContact, ClientContact } from '../types/Contact';
import capitalize from './capitalize';

type ApiResults = {
  results: ApiContact[]
}

const mapContact = (contact: ApiContact): ClientContact => {
  const {
    name, picture, phone, cell, email,
  } = contact;

  return {
    id: uuid(),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture?.large || '',
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
  };
};

export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  const contactData: ApiResults = await response.json();

  return contactData.results.map(mapContact);
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const userData: ApiResults = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const userData: ApiResults = await response.json();

  return mapContact(userData.results[0]);
};
