import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, onClick, tabIndex}) => (
  <button type="button" tabIndex={tabIndex} onClick={onClick}>
    {title}
    <style jsx>{`
      border: 1px solid #ddd;
      background: #fff;
      transition: border 0.12s ease-in-out;
      height: 2.4rem;
      padding: 0 0.8rem;
      border-radius: 4px;
      color: #111;
      font-size: 1.2rem;
      text-align: center;
      line-height: 2.4rem;
      outline: none;

      :hover,
      :focus {
        border-color: #007aff;
      }
    `}</style>
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

export default Button;
