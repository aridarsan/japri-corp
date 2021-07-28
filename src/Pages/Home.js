import React from 'react';
import Hero from '../Components/Hero';
import Produk from '../Components/Produk';
import Keunggulan from '../Components/Keunggulan';
import Pemberdayaan from '../Components/Pemberdayaan';
import Capaian from '../Components/Capaian';
import Pelanggan from '../Components/Pelanggan';
import TanyaJawab from '../Components/TanyaJawab';
import Masukan from '../Components/Masukan';
import GaleriPelanggan from '../Components/GaleriPelanggan';
import Testimoni from '../Components/Testimoni';
// import ContextApi from '../Context/ContextApi';

//import foto
import blmftt from '../Images/foto-testi/1.png';
import chefhimagi from '../Images/foto-testi/2.png';
import skripsiprabayar from '../Images/foto-testi/3.png';
import topihimagri from '../Images/foto-testi/4.png';
import pdhbemfeb from '../Images/foto-testi/5.png';
import kaosunigal from '../Images/foto-testi/6.png';
import printpasca2 from '../Images/foto-testi/7.png';
import hardcover from '../Images/foto-testi/8.png';

import blmunsil from '../Images/pelanggan/blm-unsil.png';
import bemfeb from '../Images/pelanggan/bem-feb.png';
import bemfai from '../Images/pelanggan/bem-fai.png';
import blmfai from '../Images/pelanggan/blm-fai.png';
import blmft from '../Images/pelanggan/blm-ft.png';
import himapbio from '../Images/pelanggan/himapbio.png';
import demastai from '../Images/pelanggan/dema-stai.png';
import bemfisip from '../Images/pelanggan/bem-fisip.png';
import himagri from '../Images/pelanggan/himagri.png';
import himageo from '../Images/pelanggan/himageo.png';
import edsa from '../Images/pelanggan/edsa.png';
import bemfkip from '../Images/pelanggan/bem-fkip.png';

const customer = [
  { image: blmunsil, nama: 'BLM UNSIL' },
  { image: bemfeb, nama: 'BEM FEB' },
  { image: blmfai, nama: 'BLM FAI' },
  { image: bemfai, nama: 'BEM FAI' },
  { image: blmft, nama: 'BLM FT' },
  { image: himapbio, nama: 'HIMAPBIO' },
  { image: demastai, nama: 'DEMA STAI' },
  { image: bemfisip, nama: 'BEM FISIP' },
  { image: edsa, nama: 'EDSA' },
  { image: himagri, nama: 'HIMAGRI' },
  { image: bemfkip, nama: 'BEM FKIP' },
  { image: himageo, nama: 'HIMAGEO' },
];

const pelanggan = [
  { img: blmftt, name: 'PDH BLM FT' },
  { img: chefhimagi, name: 'Baju Chef Himagi' },
  { img: skripsiprabayar, name: 'Skripsi Prabayar' },
  { img: topihimagri, name: 'Bucket Hat Himagri' },
  { img: pdhbemfeb, name: 'PDH BEM FEB' },
  { img: kaosunigal, name: 'T-shirt Unigal' },
  { img: printpasca2, name: 'Print Pascabayar' },
  { img: hardcover, name: 'Hard Cover Skripsi' },
];

const Home = () => {

  return (
    <React.Fragment>
      <Hero />
      <Produk />
      <Keunggulan />
      <GaleriPelanggan foto={pelanggan} />
      <Pemberdayaan />
      <Capaian />
      <Pelanggan customer={customer} />
      <Testimoni />
      <TanyaJawab />
      <Masukan />
    </React.Fragment>
  );
};

export default Home;
