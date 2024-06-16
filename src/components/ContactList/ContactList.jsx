
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId)); 
  };

  return (
    <ul className={css.contactContainer}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDelete={() => handleDelete(contact.id)} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
