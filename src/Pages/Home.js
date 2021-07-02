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

const Home = () => {

  return (
    <React.Fragment>
      <Hero/>
      <Produk/>
      <Keunggulan/>
      <GaleriPelanggan/>
      <Pemberdayaan/>
      <Capaian/>
      <Pelanggan/>
      <Testimoni/>
      <TanyaJawab/>
      <Masukan/>
    </React.Fragment>
  )
}

export default Home;