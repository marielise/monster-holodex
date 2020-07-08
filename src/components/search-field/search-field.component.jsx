import React from 'react';

import './search-field.styles.css';

export const SearchField = ({ placeHolder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};
