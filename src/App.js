import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyle from "./Styles/Global"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./Components/Footer"
import AddTestimoni from "./Components/AddTestimoni"
import CaraPesan from "./Components/CaraPesan"
import NotFound from "./Components/NotFound"
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <React.Fragment>
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <GlobalStyle/>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/tambah-testimoni'>
          <AddTestimoni/>
        </Route>

        <Route path='/cara-pesan'>
          <CaraPesan/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
