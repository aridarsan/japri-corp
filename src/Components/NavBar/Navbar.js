/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import {Link, NavLink} from "react-router-dom"
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
  background: #0094F4;
  z-index: 100;
  font-size: 1rem;
  box-shadow: 0 0 40px rgb(0 0 0 / 10%);
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

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1100px) {
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
            <NavLink exact to='/' activeClassName="active">Beranda</NavLink>
            <Link to='/'>Produk</Link>
            <NavLink to='/cara-pesan' activeClassName="active">Cara Pesan</NavLink>
            <NavLink to='/about' activeClassName="active">Tentang Japri</NavLink>
            <NavLink to='/testimoni' activeClassName="active">Testimoni</NavLink>
            <NavLink to='/karir' activeClassName="active">Karir</NavLink>
            <a href='https://wa.me/628992021306' target="_blank" rel="noopener noreferrer"><WhatsAppIcon/></a>
            <a href='https://www.instagram.com/japricorp/' target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
            <a href='mailto:japri.corporation@gmail.com' target="_blank" rel="noopener noreferrer"><MailOutlineIcon/></a>
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
