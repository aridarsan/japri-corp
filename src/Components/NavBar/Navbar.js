/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import {Link} from "react-router-dom"
import Brand from './Brand';
import Burgermenu from './Burgermenu';
import CollapseMenu from './CollapseMenu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const NavBar = styled(animated.div)`
position: fixed;
width: 100%;
top: 0;
left: 0;
background: #0895CA;
z-index: 1;
font-size: 1rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      // border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1049px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1050px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'trasnlate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
          <a href='/'></a>
            <Link to='/'>Home</Link>
            <a href='/'>Produk</a>
            <Link to='/cara-pesan'>Cara Pesan</Link>
            <Link to='/about'>Tentang Kami</Link>
            <a href='/'>Testimoni</a>
            <a href='https://wa.me/628992021306'><WhatsAppIcon/></a>
            <a href='https://www.instagram.com/japricorp/'><InstagramIcon/></a>
            <a href='mailto:japri.corporation@gmail.com'><MailOutlineIcon/></a>
          </NavLinks>
          <BurgerWrapper>
            <Burgermenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper> 
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};
export default Navbar;
