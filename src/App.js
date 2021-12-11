import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyle from "./Styles/Global"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Pelanggans from "./Pages/Pelanggans"
import GaleriPel from "./Pages/GaleriPel"
import TestiContextApi from "./Pages/TestiContextApi"
import Footer from "./Components/Footer"
import Karir from "./Components/Karir"
// import ComingSoon from "./Components/ComingSoon"
import CaraPesan from "./Components/CaraPesan"
import NotFound from "./Components/NotFound"
import ScrollToTop from "./Components/ScrollToTop"
import ContextState from './Context/ContextState';
import ReactGA from 'react-ga';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    ReactGA.initialize('G-K66V8KGJB2');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(window.location.pathname)
  }, [])

  return (
    <React.Fragment>
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <GlobalStyle/>
      <ContextState>
      <ScrollToTop/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/testimoni'>
            <TestiContextApi/>
          </Route>

          <Route path='/cara-pesan'>
            <CaraPesan/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/pelanggan'>
            <Pelanggans/>
          </Route>

          <Route path='/galeri-pelanggan'>
            <GaleriPel/>
          </Route>

          <Route path='/karir'>
            <Karir/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        </ContextState>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
