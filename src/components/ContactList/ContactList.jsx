import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDelete}) => {
  return (

    <ul className={css.contactContainer}>
      {contacts.map(contact => (
        <Contact data={contact} key = {contact.id} onDelete={onDelete} />
      ))}
    </ul>

 
  )
}

export default ContactList