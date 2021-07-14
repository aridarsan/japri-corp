import React from 'react';
import Pelanggan from '../Components/Pelanggan';
import blmunsil from '../Images/pelanggan/blm-unsil.png';
import bemunsil from '../Images/pelanggan/bem-unsil.png';
import bemfai from '../Images/pelanggan/bem-fai.png';
import blmfai from '../Images/pelanggan/blm-fai.png';
import blmft from '../Images/pelanggan/blm-ft.png';
import blmguys from '../Images/pelanggan/blm-guys.png';
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

const customer = [
  { image: blmunsil, nama: 'BLM UNSIL' },
  { image: bemunsil, nama: 'BEM UNSIL' },
  { image: bemfai, nama: 'BEM FAI' },
  { image: blmfai, nama: 'BLM FAI' },
  { image: blmft, nama: 'BLM FT' },
  { image: blmguys, nama: 'BLM' },
  { image: demastai, nama: 'DEMA STAI' },
  { image: femfaisi, nama: 'FEMFAISI' },
  { image: edsa, nama: 'EDSA' },
  { image: himagri, nama: 'HIMAGRI' },
  { image: fpips, nama: 'Kopma BS UPI' },
  { image: himageo, nama: 'HIMAGEO' },
  { image: himapenjas, nama: 'BPO HIMAPENJAS' },
  { image: himapenmas, nama: 'HIMAPENMAS' },
  { image: himapgsd, nama: 'HIMA PGSD UPI' },
  { image: hmjdikmi, nama: 'HMJ DIKMI' },
  { image: hmjep, nama: 'HMJ EP' },
  { image: imapesi, nama: 'IMAPESI' },
  { image: kan, nama: 'KAN' },
  { image: fkmtsi, nama: 'FKMTSI' },
  { image: popmasepi, nama: 'POPMASEPI' },
  { image: smartptsl, nama: 'SMART PTSL' },
  { image: bi, nama: 'GENBI' },
  { image: kipk, nama: 'KIP K' },
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
