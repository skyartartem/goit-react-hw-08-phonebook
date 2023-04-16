// import { useState } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';

// import { change} from '../../redux/filterSlice';

export const Filter = ({ filter, onChangeInput }) => {
  // const query = useSelector(state => state.filter);
  // const dispatch = useDispatch();
 
  return (
    <>
      <label><hr />
        Find contacts - 
        <input
          className={css.input}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      
      </label>
      <br />
      <br />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};