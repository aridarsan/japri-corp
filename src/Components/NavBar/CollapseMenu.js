import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const CollapseWrapper = styled(animated.div)`
  background: #0895ca;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1300;
  box-shadow: 0 8px 10px -10px black;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  // padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    line-height: 2;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
    & p {
      margin: 1rem;
    }
    & :hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const Hr = styled.hr`
  margin: 0px 2rem 0 0;
  color: #ffffff;
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
            <NavLink
              exact
              to='/'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Beranda</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <Link to='/' onClick={props.handleNavbar}>
              <div>
                <p>Produk</p>
              </div>
            </Link>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/cara-pesan'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Cara Pesan</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/about'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Tentang Japri</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/testimoni'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Testimoni</p>
              </div>
            </NavLink>
          </li>
          <Hr />

          <li>
            <NavLink
              to='/karier'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Karier</p>
              </div>
            </NavLink>
          </li>
          <Hr />

          <li>
            <a
              href='https://wa.me/628992021306'
              onClick={props.handleNavbar}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <p>
                  <WhatsAppIcon /> 08992021306
                </p>
              </div>
            </a>
          </li>
          <Hr />
          <li>
            <a
              href='https://www.instagram.com/japricorp/'
              onClick={props.handleNavbar}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <p>
                  <InstagramIcon /> japricorp
                </p>
              </div>
            </a>
          </li>
          <Hr />
          <li>
            <a
              href='mailto:japri.corporation@gmail.com'
              onClick={props.handleNavbar}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <p>
                  <MailOutlineIcon /> japri.corporation@gmail.com
                </p>
              </div>
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
