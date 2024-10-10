import React from 'react';

const Header = ({ name, contactInfo }) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>Email: {contactInfo.email} | Website: {contactInfo.website} | Phone: {contactInfo.phone} </p>
    </header>
  );
};

export default Header;
