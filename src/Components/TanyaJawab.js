import React from 'react';
import {
  Grid,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const tanyajawab = [
  {
    panel: 'panel1',
    aria: 'panel1bh-content',
    id: 'panel1bh-header',
    tanya: 'Apakah Japri bisnis yang bergerak di print aja ?',
    jawab:
      'Pada mulanya ketika awal-awal beridiri Japri memang fokus terhadap produk print yang berhubungan dengan tugas mata kulaih seperti mencetak makalah, jurnal, artikel ilmiah, draft ujian proposal, draft ujian skripsi dan lain sebagainya. Namun, lambat laun Japri pun melakukan diversifikasi produk dan meluaskan visi serta misi dengan menjadi platform kebutuhan mahasiswa',
  },
  {
    panel: 'panel2',
    aria: 'panel2bh-content',
    id: 'panel2bh-header',
    tanya: 'Kenapa sih di Japri ada crew ? ',
    jawab:
      'Karena kita menyedari bahwa bisnis yang baik ialah bisnis yang mampu berdampak pada lingkungan sekitar. Dengan adanya crew dari masing-masing ceruk kampus akan membantu mahasiswa untuk belajar bersama-bersama dalam berwirausaha serta dapat meningkatkan income kepada mahasiswa.',
  },
  {
    panel: 'panel3',
    aria: 'panel3bh-content',
    id: 'panel3bh-header',
    tanya:
      'Japri kan bisnisnya mahasiswa, emang selain mahasiswa masih bisa order di Japri ? ',
    jawab:
      'Bisa banget dong, meskipun Japri paltform bisnisnisnya mahasiswa namun selain dari mahasiswa boleh banget order di Japri. ',
  },
  {
    panel: 'panel4',
    aria: 'panel4bh-content',
    id: 'panel4bh-header',
    tanya: 'Apa aja sih produk produk yang ada di Japri ? ',
    jawab:
      'Untuk saat ini ada 6 klasifikasi produk di Japri yaitu jasa konveksi sperti pembuatan baju PDH, PDL, jaket, T-shirt, polo dsb, kemudian ada jasa printing yaitu mencetak dokumen tugas-tugas mata kuliah mahasiswa sperti jurnal, artikel ilmiah, makalah, draft porposal, draft skripsi, hard cover skripsi dsb, yang selanjutnya ada jasa percetakan seperti banner, stiker, ganci dsb, yang selanjutnya ada jasa penyedia buku referensi mata kuliah dari berbagai jurusan, selanjutnya jasa pembuatan gift wisuda seperti selempang dan bucket dan yang terakhir adalah jasa sevice software laptop.  ',
  },
  {
    panel: 'panel5',
    aria: 'panel5bh-content',
    id: 'panel5bh-header',
    tanya:
      'Kalau ada kesalahan proses produksi, apakah Japri akan bertanggung jawab ? ',
    jawab:
      'jika kesalahan tersebut dari pihak Japri, maka kami akan bertanggung jawab 100%.',
  },
  {
    panel: 'panel6',
    aria: 'panel6bh-content',
    id: 'panel6bh-header',
    tanya: 'Ribet gak sih kalau order produk di Japri ? ',
    jawab:
      'ngga ribet kok, simpel banget kamu tinggal hubungi kontak person Japri menanyakan produk yang dimaksud, terus menunggu proses produksi, melakukan pembayaran bisa dengan tunai maupun nontonai dan yang terakhir pengiriman produk. ',
  },
  {
    panel: 'panel7',
    aria: 'panel7bh-content',
    id: 'panel7bh-header',
    tanya: 'Dimana alamat lengkap Japri, jauh gak sih ?',
    jawab:
      'Deket banget sama Kampus Unsil lebih tepatnya di Lokasi : Jl. Siliwangi, Gn. Macan 2, Kostan Pulau Biru, Kota Tasikmalaya',
  },
  {
    panel: 'panel8',
    aria: 'panel8bh-content',
    id: 'panel8bh-header',
    tanya: 'Kenapa sih aku harus order di Japri ? ',
    jawab:
      '1. Fast Respon dalam melayani 2. Customer Kualitas produk terbaik 3. Banyak berbagai promosi produk Harga produk sangat bersahabat dengan customer 4.Bertanggung jawab apabila terjadi kesalahan dari pihak Japri Kecepatan dalam proses produksi dan Menyediakan jasa design untuk memudahkan konsumen',
  },
  {
    panel: 'panel9',
    aria: 'panel9bh-content',
    id: 'panel9bh-header',
    tanya: 'Sejak kapan Japri berdiri ?',
    jawab: 'Japri beridiri pada tanggal 14 maret 2016',
  },
  {
    panel: 'panel10',
    aria: 'panel10bh-content',
    id: 'panel10bh-header',
    tanya: 'Apakah Japri sudah punya aplikasi ? ',
    jawab:
      'Untuk saat ini Japri sedang mengembangkan platform aplikasi yang sesuai dengan kebutuhan Japri dan pelanggan Japri, jadi doain aja ya ngga lama lagi isnyaAlloh Japri akan lunching aplikasi.',
  },
  {
    panel: 'panel11',
    aria: 'panel11bh-content',
    id: 'pane11bh-header',
    tanya: 'Apa sih yang membedakan Japri dengan bisnis sejenis yang lain ? ',
    jawab:
      'Kualitas produksi yang terbaik, banyak promosi atau discount, nggak usah antri dan ribet di pesaing konvensional, pengerjaan produksi yang cepat, Japri memiliki sales force crew untuk memudahkan proses marketing. ',
  },
];

export default function TanyaJawab() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3
              style={{
                margin: '2rem 0',
                fontWeight: '700',
                fontFamily: 'Montserrat',
                color: '#0895CA',
                textAlign: 'center',
              }}
            >
              <span
                className='borderBottom'
                style={{ borderBottom: '.25rem solid #0895CA' }}
              >
                Tanya Jawab
              </span>
            </h3>

            <p
              style={{
                fontFamily: 'Montserrat',
                color: '#4f4f4f',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              Berikut beberapa pertanyaan yang diharapkan dapat membantu
              menjawab pertanyaan konsumen
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            {tanyajawab.map((item, index) => (
              <Accordion
                expanded={expanded === item.panel}
                onChange={handleChange(item.panel)}
                style={{ borderRadius: '0px', border: '2px solid #0895CA' }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: '#0895CA' }} />}
                  aria-controls={item.aria}
                  id={item.id}
                >
                  <p style={{ margin: 0 }}>{item.tanya}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <small style={{ margin: 0 }}>{item.jawab}</small>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
