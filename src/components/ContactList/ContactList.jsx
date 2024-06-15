import { useDispatch } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { deleteContact } from "../../redux/contactsSlice";
const ContactList = ({ contacts}) => {
  const dispatch = useDispatch();
  const handleDelete = (contactId) =>{
    dispatch (deleteContact(contactId))
  }
  return (

    <ul className={css.contactContainer}>
      {contacts.map(contact => (
        <Contact data={contact} key = {contact.id} onDelete={()=>handleDelete (contact.id)} />
      ))}
    </ul>

 
  )
}

export default ContactList