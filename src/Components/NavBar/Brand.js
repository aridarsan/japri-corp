import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/japri.png';
import {Link} from "react-router-dom"

const Brand = () => {
  return (
      //Japri Logo
    <Link to='/'>
      {' '}
      <Image src={logo} alt='japri logo' />
    </Link>
  );
};

export default Brand;

const Image = styled.img`
  height: 3rem;
  margin: 1rem 0;
`;
