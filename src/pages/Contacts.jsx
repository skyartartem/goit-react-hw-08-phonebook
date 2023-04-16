import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

// import { ContactForm } from 'components/ContactForm/ContactForm';

// import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import css from 'components/App.module.css';

import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [filter, setFilter] = useState('');
  
   const onChangeInput = evt => {
     setFilter(evt.currentTarget.value);
   };

  return (
    <>
      {/* <div className={css.conteiner}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div> */}

      {/* <Helmet> */}
      <title>Your Contacts</title>
      {/* </Helmet> */}
      <ContactEditor />
      <Filter filter={filter} onChangeInput={onChangeInput} />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList filter={filter} />
    </>
  );
}
