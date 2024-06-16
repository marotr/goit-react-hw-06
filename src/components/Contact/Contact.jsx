
import css from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <div className={css.contact}>
        <div>
          <p><IoPerson /> {name}</p>
          <p><FaPhoneAlt /> {number}</p>
        </div>
        <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
