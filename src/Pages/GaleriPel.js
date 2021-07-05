import React from 'react';
import GaleriPelanggan from '../Components/GaleriPelanggan';

import blmus from '../Images/foto-testi/1.png';
import chefhimagi from '../Images/foto-testi/2.png';
import skripsiprabayar from '../Images/foto-testi/3.png';
import topihimagri from '../Images/foto-testi/4.png';
import pdhbemfeb from '../Images/foto-testi/5.png';
import kaosunigal from '../Images/foto-testi/6.png';
import printpasca2 from '../Images/foto-testi/7.png';
import hardcover from '../Images/foto-testi/8.png';
import himagri from '../Images/foto-testi/9.png';
import himagi from '../Images/foto-testi/10.png';
import pascabayar from '../Images/foto-testi/11.png';
import bemfai from '../Images/foto-testi/12.png';
import himadikmi from '../Images/foto-testi/13.png';
import fkmtsi from '../Images/foto-testi/14.png';
import upi from '../Images/foto-testi/15.png';
import printpasca from '../Images/foto-testi/16.png';

const pelanggan = [
  { img: blmus, name: 'PDH BLM US' },
  { img: chefhimagi, name: 'Baju Chef Himagi' },
  { img: skripsiprabayar, name: 'Skripsi Prabayar' },
  { img: topihimagri, name: 'Topi Himagri' },
  { img: pdhbemfeb, name: 'PDH BEM FEB' },
  { img: kaosunigal, name: 'T-Shirt Unigal' },
  { img: printpasca2, name: 'Print Pascabayar' },
  { img: hardcover, name: 'Hard Cover Skripsi' },
  { img: himagri, name: 'PDH Himagri' },
  { img: himagi, name: 'PDH HImagi' },
  { img: pascabayar, name: 'Print Pascabayar' },
  { img: bemfai, name: 'PDH BEM FAI' },
  { img: himadikmi, name: 'PDH Himadikmi' },
  { img: fkmtsi, name: 'PDH FKMTSI' },
  { img: upi, name: 'PDH UPI' },
  { img: printpasca, name: 'Print Pascabayar' },
];

const GaleriPel = () => {
  return (
    <React.Fragment>
      <div style={{ margin: '5rem 0' }}>
        <GaleriPelanggan foto={pelanggan} display='none' />
      </div>
    </React.Fragment>
  );
};
export default GaleriPel;
