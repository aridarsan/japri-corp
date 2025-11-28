import React from "react";
import {
  Grid,
  Container,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
// import oprec from "../Images/cro 22.jpg";
import ops from "../Images/oprecdmso26.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Detail = [
  {
    panel: "panel1",
    aria: "panel1bh-content",
    id: "panel1bh-header",
    tanya: "Digital Marketing",
    jawab: [
      {
        nama1: "Kualifikasi",
        Kualifikasi: [
          "Menguasai Microsoft Office",
          "Menguasai Software Desain Grafis",
          "Menguasai Software Video Editor",
          "Memiliki kemampuan mengelola sosial media",
        ],
        nama2: "Persyaratan",
        Persyaratan: [
          "Mahasiswa Aktif Angkatan 2023, 2024 dan 2025",
          "Melampirkan CV, KTP dan KTM",
          "Berjenis Kelamin Laki-laki",
          "Memiliki Portofolio",
          "Melampirkan Motivation Letter"
        ],
      },
    ],
  },
  {
    panel: "panel2",
    aria: "panel2bh-content",
    id: "panel2bh-header",
    tanya: "Staff Operasional",
    jawab: [
      {
        nama1: "Kualifikasi",
        Kualifikasi: [
          "Menguasai Microsoft Office",
          "Menguasai Corel Draw",
          "Menguasai Software Vide Editor (lebih diutamakan)",
        ],
        nama2: "Persyaratan",
        Persyaratan: [
          "Mahasiswa aktif Tasikmalaya Angkatan 2023, 2024 dan 2025",
          "Melampirkan CV, KTP & KTM",
          "Berjenis Kelamin Laki-laki",
        ],
      },
    ],
  },
  // {
  //   panel: "panel3",
  //   aria: "panel3bh-content",
  //   id: "panel3bh-header",
  //   tanya: "Finance",
  //   jawab: [
  //     {
  //       nama1: "Kualifikasi",
  //       Kualifikasi: [
  //         "Mengerti laporan keuangan",
  //         "Paham dan mahir akuntansi",
  //         "Mahir Microsoft excel",
  //         "Teliti dan bertanggungjawab",
  //       ],
  //       nama2: "Persyaratan",
  //       Persyaratan: [
  //         "Mahasiswa aktif Tasikmalaya Angkatan 2021, 2022 & 2023",
  //         "Melampirkan CV, KTP & KTM",
  //         "Melampirkan Motivation Letter",
  //         "Laki-laki",
  //       ],
  //     },
  //   ],
  // },
];

const Karier = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" style={{ marginTop: "5rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3">
              <span className="borderBottom">Open Recruitment</span>
            </h3>

            <p className="pjudul">Bergabunglah bersama kami</p>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2}> */}
          {/* <Grid item xs={12} sm={6} lg={4}> */}
            <img
              src={ops}
              width="100%"
              alt="oprec"
              style={{ borderRadius: "1rem" }}
            />
          {/* </Grid> */}

<Grid container spacing={2}>
  {/* <br/>
            <h4 style={{
                marginBottom: "0.5rem",
                textAlign: "center",
                alignItems: "center",
              }}>WE ARE HIRING DIGITAL MARKETING & STAFF OPERASIONAL JAPRI CORP</h4>
            <br /> */}
          <Grid item xs={12} sm={12} lg={12}>
            <br/>
            <p>
              Japri Corp merupakan Start-Up yang sedang berkembang di
              Tasikmalaya, maka dari itu kami membutuhkan talenta terbaik yang
              mampu untuk berkontribusi dalam menjadikan Japri sebagai salah
              satu perusahaan yang besar di Tasikmalaya. Jika kamu yang kami
              cari, mari ikut bergabung menjadi bagian dari Japri Corp. Kami
              sedang membutuhkan <b>Digital Marketing </b> dan <b>Staff 
              Operasional</b> untuk membantu mengembangkan
              Japri Corp.
            </p>
        {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} lg={6}> */}
            <h5 style={{ marginBottom: "0.5rem" }}> Benefit</h5>
            <ol>
              <li>Mendapatkan pendapatan bulanan</li>
              <li>Mendapatkan fasilitas yang disediakan oleh Japri Corp</li>
              <li>Mendapatkan bonus jika melebihi target</li>
            </ol>
            {/* </Grid> */}
          </Grid>
          {/* </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <h5
              style={{
                marginBottom: "0.5rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Kualifikasi dan Persyaratan
            </h5>

            <Grid item xs={12}>
              {Detail.map((item, index) => (
                <Accordion
                  expanded={expanded === item.panel}
                  onChange={handleChange(item.panel)}
                  style={{ borderRadius: "0px", border: "2px solid #0094F4" }}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#0094F4", padding: "0" }}
                      />
                    }
                    aria-controls={item.aria}
                    id={item.id}
                  >
                    <h5
                      style={{
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {item.tanya}
                    </h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.jawab.map((detail, index) => (
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={12}>
                          <h5
                            style={{ marginBottom: "0.5rem", color: "#000000" }}
                          >
                            {" "}
                            {detail.nama1}
                          </h5>

                          <Grid item xs={12}>
                            <ol
                              key={index}
                              style={{ margin: 0, paddingLeft: "1rem" }}
                            >
                              {detail.Kualifikasi.map((isi, index) => (
                                <li key={index}>
                                  <p style={{ margin: 0 }} key={index}>
                                    {isi}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12}>
                          <h5
                            style={{ marginBottom: "0.5rem", color: "#000000" }}
                          >
                            {" "}
                            {detail.nama2}
                          </h5>

                          <Grid item xs={12}>
                            <ol
                              key={index}
                              style={{ margin: 0, paddingLeft: "1rem" }}
                            >
                              {detail.Persyaratan.map((isi, index) => (
                                <li key={index}>
                                  <p style={{ margin: 0 }} key={index}>
                                    {isi}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </Grid>

                          <p>
                            Jika kamu berminat dan memenuhi kualifikasi serta
                            persyaratan diatas, silakan klik gabung pada tombol
                            dibawah ini
                          </p>

                          <a
                            href="https://forms.gle/cEdjbJKpDH84BbUs7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="contained"
                              className="btn-submit"
                              size="medium"
                              style={{ marginBottom: "1rem" }}
                            >
                              Gabung Bersama Japri
                            </Button>
                          </a>
                        </Grid>
                      </Grid>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>

          <br />

          <Grid item xs={12} sm={12} lg={6}>
            <h5
              style={{
                marginBottom: "0.5rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Timeline Recruitment
            </h5>

            <Grid
              style={{
                padding: "1rem",
                border: "2px solid #0094F4",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h5>Waktu pendaftaran:</h5>
              <p>Senin, 1 Desember 2025 s/d Sabtu, 13 Desember 2025</p>

              <h5> Seleksi berkas:</h5>
              <p> Minggu, 14 Desember 2025 s/d Senin, 15 Desember 2025</p>

              <h5> Pengumuman Seleksi Administrasi:</h5>
              <p>Selasa, 16 Desember 2025</p>

              <h5> Seleksi Wawancara:</h5>
              <p>Jumat, 19 Desember 2025 s/d Sabtu, 20 Desember 2025</p>

              <h5> Pengumuman Akhir:</h5>
              <p>Selasa, 23 Desember 2025</p>

              <p>
                Pendaftaran terbuka untuk mahasiswa umum yang kuliah di
                Tasikmalaya. Jadi tunggu apalagi mari bergabung bersama kami
                untuk menjadi wirausaha muda!! dan jangan lupa terus pantau
                media sosial Japri untuk mendapatkan informasi terbaru.
              </p>

              
                <h5>NOTE</h5>
                <p>
                Semua proses pengumuman dalam tahap seleksi melalui <strong>Email</strong><br/>
                Open recruitment ini tidak dipungut biaya apapun atau <strong>GRATIS</strong>.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Karier;
