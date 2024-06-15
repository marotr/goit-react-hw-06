

import { createSlice } from "@reduxjs/toolkit";
import contactsArray from '../components/contacts.json';

const contactsInitialState = {
  items: JSON.parse(window.localStorage.getItem('saved-contact')) || contactsArray,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
      window.localStorage.setItem('saved-contact', JSON.stringify(state.items));
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
      window.localStorage.setItem('saved-contact', JSON.stringify(state.items));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
