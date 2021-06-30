import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom"
import { useSpring, animated } from 'react-spring';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const CollapseWrapper = styled(animated.div)`
  background: #0895CA;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1300;
  box-shadow: 0 5px 10px -10px black;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  // padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;

    & :hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <NavLink exact to='/' activeClassName="active" onClick={props.handleNavbar}>
              Home
            </NavLink>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <Link to='/' onClick={props.handleNavbar}>
              Produk
            </Link>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <NavLink to='/cara-pesan' activeClassName="active" onClick={props.handleNavbar}>
              Cara Pesan
            </NavLink>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <NavLink to='/about' activeClassName="active" onClick={props.handleNavbar}>
              Tentang Japri
            </NavLink>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <NavLink to='/tambah-testimoni' activeClassName="active" onClick={props.handleNavbar}>
              Testimoni
            </NavLink>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <a href='https://wa.me/628992021306' onClick={props.handleNavbar}>
              <WhatsAppIcon/> 08992021306
            </a>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <a href='https://www.instagram.com/japricorp/' onClick={props.handleNavbar}>
              <InstagramIcon/> japricorp
            </a>
          </li>
          <hr style={{margin: "0px 2rem 0 0", color:"#ffffff"}}/>
          <li>
            <a href='mailto:japri.corporation@gmail.com' onClick={props.handleNavbar}>
              <MailOutlineIcon/> japri.corporation@gmail.com
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
