import React from 'react';
import '../styles.css';
import propTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="SearchForm-button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  onHandleClickLoadMore: propTypes.func,
};
