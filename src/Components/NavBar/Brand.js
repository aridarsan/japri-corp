import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/japri.png';

const Brand = () => {
  return (
    <a href='/'>
      {' '}
      <Image src={logo} alt='japri logo' />
    </a>
  );
};

export default Brand;

const Image = styled.img`
  height: 3rem;
  margin: 1rem 0;
`;
