import React from "react";
import {
  Grid,
  Container,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import oprec from "../Images/cro.png";
// import ops from "../Images/op1.jpeg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Timeline from "./Timeline";

const Detail = [
  {
    panel: "panel1",
    aria: "panel1bh-content",
    id: "panel1bh-header",
    tanya: "Customer Relation Officer",
    jawab: [
      {
        nama1: "Kualifikasi",
        Kualifikasi: [
          "Berjiwa Wirausaha",
          "Memiliki Komunikasi yang baik",
          "Memiliki skill selling"
        ],
        nama2: "Persyaratan",
        Persyaratan: [
          "Mahasiswa Laki-laki/Perempuan (Angkatan 2020, 2021, 2022)",
          "Berasal dari kampus Universitas Siliwangi",
          "Aktif bermedia sosial"
        ],
      },
    ],
  },
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

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <img
              src={oprec}
              width="100%"
              alt="oprec"
              style={{ borderRadius: "1rem" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={8}>
            <h4>WE ARE HIRING CUSTOMER RELATION OFFICER JAPRI CORP</h4>
            <br />

            <p>
              Japri Corp merupakan Start-Up yang sedang berkembang di
              Tasikmalaya, maka dari itu kami membutuhkan talenta terbaik yang
              mampu untuk berkontribusi dalam menjadikan Japri sebagai salah
              satu perusahaan yang besar di Tasikmalaya. Jika kamu yang kami
              cari, mari ikut bergabung menjadi bagian dari Japri Corp yaitu sebagai CRO
            </p>

            <h5 style={{ marginBottom: "0.5rem" }}> Benefit</h5>
            <ol>
              <li>Mendapatkan penghasilan ratusan ribu rupiah</li>
              <li>Mendapatkan discount khusus produk print (Mahasiswa tingkat akhir 30%-50% dan mahasiswa biasa 20%)</li>
              <li>Mentoring bisnis</li>
              <li>Mendapatkan bonus jika melebihi target</li>
            </ol>

          </Grid>
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
                          href="https://forms.gle/ALReLR1Wyxb3TEgm7"
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
            {/* <Timeline/> */}

            <Grid
              style={{
                padding: "1rem",
                border: "2px solid #0094F4",
                backgroundColor: "#fff"
              }}
            >
              <h5>Waktu pendaftaran:</h5>
              <p>Rabu, 25 Oktober 2023 s/d Rabu, 1 November 2023</p>

              <h5> Seleksi berkas:</h5>
              <p>Kamis-Sabtu, 2-4 November 2023</p>

              <h5> Pengumuman Seleksi Berkas:</h5>
              <p>Minggu, 5 November 2023</p>

              <h5> Seleksi Wawancara:</h5>
              <p>Selasa-Sabtu, 7-11 November 2023</p>

              {/* <h5> Pengumuman Akhir:</h5>
              <p>Kamis, 14 September 2023</p> */}

              <p>
              Pendaftaran terbuka untuk mahasiswa angkatan 2020, 2021 dan 2022. Jadi tunggu apalagi mari bergabung bersama kami untuk
              menjadi wirausaha muda!! dan jangan lupa terus pantau media sosial
              Japri untuk mendapatkan informasi terbaru.
            </p>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Karier;
