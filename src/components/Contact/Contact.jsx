import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name} </p>
      <span>- {number}</span>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
