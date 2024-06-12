
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import{ useState, useEffect } from "react"
import contactsArray from './components/contacts.json'


const App =() => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contact");
    return savedContact ? JSON.parse(savedContact) : contactsArray;
    });
  useEffect(() => {
        window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');
 const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  
  const addContact = (newContact) => {
    setContacts((prevContact) => { return [...prevContact, newContact]; } )
      ; 
    
  };
  const deleteContact = (contactId) => {
    
    setContacts((prevContact) => {
      
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

 
    return( <div>
  <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact}  />
      <SearchBox value={filter } onFilter = {setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
</div>)
   

  
}

export default App
