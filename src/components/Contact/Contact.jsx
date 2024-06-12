
import css from "./Contact.module.css"
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ data:{ name, number, id}, onDelete }) => {
 
  return (
    <li >
      <div className={css.contact}>
        <div><p><IoPerson />  {name}</p>
        <p><FaPhoneAlt />  {number}</p></div>
        <button className={css.btnDelete} onClick={()=> onDelete(id)}>Delete</button>
      </div>
          
    </li>
  )
}

export default Contact