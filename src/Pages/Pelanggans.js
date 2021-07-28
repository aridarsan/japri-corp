import React from 'react';
import Pelanggan from '../Components/Pelanggan';
import blmunsil from '../Images/pelanggan/blm-unsil.png';
import bemfeb from '../Images/pelanggan/bem-feb.png';
import bemfai from '../Images/pelanggan/bem-fai.png';
import blmfai from '../Images/pelanggan/blm-fai.png';
import blmft from '../Images/pelanggan/blm-ft.png';
import demastai from '../Images/pelanggan/dema-stai.png';
import femfaisi from '../Images/pelanggan/femfaisi.png';
import himagri from '../Images/pelanggan/himagri.png';
import fpips from '../Images/pelanggan/fpips.png';
import himageo from '../Images/pelanggan/himageo.png';
import edsa from '../Images/pelanggan/edsa.png';
import himapenjas from '../Images/pelanggan/hima-penjas.png';
import himapenmas from '../Images/pelanggan/himapenmas.png';
import himapgsd from '../Images/pelanggan/himapgsd.png';
import hmjdikmi from '../Images/pelanggan/hmj-dikmi.png';
import hmjep from '../Images/pelanggan/hmj-ep.png';
import imapesi from '../Images/pelanggan/imapesi.png';
import kan from '../Images/pelanggan/kan.jpg';
import kipk from '../Images/pelanggan/kip-k.png';
import fkmtsi from '../Images/pelanggan/fkmtsi.png';
import popmasepi from '../Images/pelanggan/popmasepi.png';
import smartptsl from '../Images/pelanggan/smart-ptsl.png';
import bi from '../Images/pelanggan/bi.png';
import himapbio from '../Images/pelanggan/himapbio.png';

import pln from '../Images/pelanggan/pln.png';
import barakatak from '../Images/pelanggan/barakatak.png';
import bemfisip from '../Images/pelanggan/bem-fisip.png';
import bemfkip from '../Images/pelanggan/bem-fkip.png';
import himagi from '../Images/pelanggan/himagi.png';
// import dkm from '../Images/pelanggan/dkm.png';
import irc from '../Images/pelanggan/irc.png';
import kamaung from '../Images/pelanggan/kamaung.png';
import katumbiri from '../Images/pelanggan/katumbiri.png';
import kisi from '../Images/pelanggan/kisi.png';
import kkn21 from '../Images/pelanggan/kkn21.png';
import kkntandala from '../Images/pelanggan/kkn-tandala.png';
// import kspm from '../Images/pelanggan/logo kspm.png';
// import jurnalistik from '../Images/pelanggan/jurnalistik.png';
import yb from '../Images/pelanggan/logo yb fc.png';

const customer = [
  { image: blmunsil, nama: 'BLM UNSIL' },
  { image: bemfeb, nama: 'BEM FEB' },
  { image: bemfai, nama: 'BEM FAI' },
  { image: blmfai, nama: 'BLM FAI' },
  { image: blmft, nama: 'BLM FT' },
  { image: bemfisip, nama: 'BEM FISIP' },
  { image: bemfkip, nama: 'BEM FKIP' },
  { image: himapbio, nama: 'HIMAPBIO' },
  { image: edsa, nama: 'EDSA' },
  { image: himagri, nama: 'HIMAGRI' },
  { image: himageo, nama: 'HIMAGEO' },
  { image: himapenmas, nama: 'HIMAPENMAS' },
  { image: hmjdikmi, nama: 'HMJ DIKMI' },
  { image: hmjep, nama: 'HMJ EP' },
  { image: himagi, nama: 'HIMAGI' },
  { image: demastai, nama: 'DEMA STAI' },
  { image: femfaisi, nama: 'FEMFAISI' },
  { image: imapesi, nama: 'IMAPESI' },
  { image: kan, nama: 'KAN' },
  { image: popmasepi, nama: 'POPMASEPI' },
  { image: barakatak, nama: 'BARAKATAK' },
  // { image: dkm, nama: 'DKM' },
  { image: irc, nama: 'IRC' },
  { image: kamaung, nama: 'KAMAUNG' },
  { image: katumbiri, nama: 'KATUMBIRI' },
  { image: kkn21, nama: 'KKN 21' },
  { image: kkntandala, nama: 'KKN GN TANDALA' },
  { image: kisi, nama: 'KISI' },
  { image: bi, nama: 'GENBI' },
  { image: kipk, nama: 'KIP-K' },
  { image: fpips, nama: 'KOPMA BS UPI' },
  { image: himapenjas, nama: 'BPO HIMAPENJAS' },
  { image: himapgsd, nama: 'HIMA PGSD UPI' },
  { image: pln, nama: 'PLN TASIK' },
  { image: fkmtsi, nama: 'FKMTSI' },
  { image: smartptsl, nama: 'SMART PTSL' },
  // { image: kspm, nama: 'KSPM' },
  // { image: jurnalistik, nama: 'KELAS JURNALISTIK' },
  { image: yb, nama: 'YOUNG BOY' },
];

const Pelanggans = () => {
  return (
    <React.Fragment>
      <div style={{ margin: '5rem 0' }}>
        <Pelanggan customer={customer} display='none' />
      </div>
    </React.Fragment>
  );
};
export default Pelanggans;
