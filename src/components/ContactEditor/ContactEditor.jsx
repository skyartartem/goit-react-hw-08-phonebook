import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name !== '' && number !== '') {
      dispatch(addContact({name, number}));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name: <input name="name" className={css.input} /></label>
      <label>Number: <input name="number" type="tel" className={css.input} /></label>
      
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
