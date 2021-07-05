import React from "react"
import Hero from "../Components/Hero"
import Produk from "../Components/Produk"
import Keunggulan from "../Components/Keunggulan"
import Pemberdayaan from "../Components/Pemberdayaan"
import Capaian from "../Components/Capaian"
import Pelanggan from "../Components/Pelanggan"
import TanyaJawab from "../Components/TanyaJawab"
import Masukan from "../Components/Masukan"
import GaleriPelanggan from "../Components/GaleriPelanggan"
import Testimoni from "../Components/Testimoni"

//import foto
import blmus from "../Images/foto-testi/1.png"
import chefhimagi from "../Images/foto-testi/2.png"
import skripsiprabayar from "../Images/foto-testi/3.png"
import topihimagri from "../Images/foto-testi/4.png"
import pdhbemfeb from "../Images/foto-testi/5.png"
import printpasca from "../Images/foto-testi/6.png"
import printpasca2 from "../Images/foto-testi/7.png"
import hardcover from "../Images/foto-testi/8.png"

import blmunsil from "../Images/pelanggan/blm-unsil.png"
import bemunsil from "../Images/pelanggan/bem-unsil.png"
import bemfai from "../Images/pelanggan/bem-fai.png"
import blmfai from "../Images/pelanggan/blm-fai.png"
import blmft from "../Images/pelanggan/blm-ft.png"
import blmguys from "../Images/pelanggan/blm-guys.png"
import demastai from "../Images/pelanggan/dema-stai.png"
import femfaisi from "../Images/pelanggan/femfaisi.png"
import himagri from "../Images/pelanggan/himagri.png"
import fpips from "../Images/pelanggan/fpips.png"
import himageo from "../Images/pelanggan/himageo.png"
import edsa from "../Images/pelanggan/edsa.png"

const customer = [
  { image: blmunsil, nama: 'BLM UNSIL' },
  { image: bemunsil, nama: 'BEM UNSIL' },
  { image: blmfai, nama: 'BLM FAI' },
  { image: bemfai, nama: 'BEM FAI' },
  { image: blmft, nama: 'BLM FT' },
  { image: blmguys, nama: 'BLM' },
  { image: demastai, nama: 'DEMA STAI' },
  { image: femfaisi, nama: 'FEMFAISI' },
  { image: edsa, nama: 'EDSA' },
  { image: himagri, nama: 'HIMAGRI' },
  { image: fpips, nama: 'Kopma BS UPI' },
  { image: himageo, nama: 'HIMAGEO' },
];

const pelanggan = [
  {img: blmus,
  name: "PDH BLM US"
  },
  {img: chefhimagi,
  name: "Baju Chef Himagi"
  },
  {img: skripsiprabayar,
  name: "Skripsi Prabayar"
  },
  {img: topihimagri,
  name: "Topi Himagri"
  },
  {img: pdhbemfeb,
  name: "PDH BEM FEB"
  },
  {img: printpasca,
  name: "Print Pascabayar"
  },
  {img: printpasca2,
  name: "Print Pascabayar"
  },
  {img: hardcover,
  name: "Hard Cover Skripsi"
  },
]

const Home = () => {

  return (
    <React.Fragment>
      <Hero/>
      <Produk/>
      <Keunggulan/>
      <GaleriPelanggan foto={pelanggan}/>
      <Pemberdayaan />
      <Capaian />
      <Pelanggan customer={customer}/>
      <Testimoni/>
      <TanyaJawab/>
      <Masukan/>
    </React.Fragment>
  )
}

export default Home;