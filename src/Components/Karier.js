import React from 'react';
import { Grid, Container, Button, Accordion, AccordionDetails, AccordionSummary,} from '@material-ui/core';
import oprec from "../Images/oprec.png";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Detail = [
  {
    panel: 'panel1',
    aria: 'panel1bh-content',
    id: 'panel1bh-header',
    tanya: 'Financial Manager',
    jawab:["Paham dan mengerti dasar akuntansi",
    "Paham tentang laporan keuangan",
    "Menguasai Microsoft office (word, excel, power point)", 
    "Siap bekerja dalam tekanan",
    "Siap bertanggung jawab dan berkomitmen"
    ]
  },
  {
    panel: 'panel2',
    aria: 'panel2bh-content',
    id: 'panel2bh-header',
    tanya: 'Marketing Manager',
    jawab:
    [
      "Memahami dasar-dasar marketing",
      "Komunikasi level up",
      "Berani mengambil resiko",
      "Tidak pemalu",
      "Siap berkomitmen aktif di Japri",
      "Memiliki tekad yang kuat"
    ]
  },
  {
    panel: 'panel3',
    aria: 'panel3bh-content',
    id: 'panel3bh-header',
    tanya:
      'Operational Manager',
    jawab:
      [
      "Siap berkomitmen aktif di Japri",
      "Jujur dan bertanggung jawab",
      "Menguasai Microsoft office (word, excel, power point)",
      "Mampu mengelola persediaan barang",
      "Siap bekerja everytime dan dibawah tekanan"
    ]
  },
  {
    panel: 'panel4',
    aria: 'panel4bh-content',
    id: 'panel4bh-header',
    tanya: 'Digital Marketing dan Design Manager',
    jawab:[
    	"Memahami dan dapat mengaplikasikan software design grafis (corel draw/Adobe Illustarator)", 
    	"Memahami dan dapat mengaplikasikan software editing  (Adobe Premiere dll)", 
    	"Siap bekerja everytime, everywhere and under pressure"
    ]
  }
]

const Karier = () => {
	 const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3">
              <span
                className='borderBottom'
              >
                Open Recruitment
              </span>
            </h3>

            <p className="pjudul">
              Begabunglah bersama kami
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
        	<Grid item xs={12} md={4} lg={4}>
        		<img src={oprec} width="100%" alt="oprec"/>
        	</Grid>

        	<Grid item xs={12} md={8} lg={8}>
        		<h4>
        			WE ARE HIRING MANAGER JAPRI CORP
        		</h4>

        		<p>
        			Hallo sahabat Japri? Apa kabar? Semoga selalu dalam keadaan baik ya sob 😘
        		</p>

        		<p> Kali ini Japri Corp sedang membuka pendaftaran bagi yang berminat untuk mengisi posisi
        		</p>

        		<ul>
        			<li>Financial Manager</li>
        			<li>Marketing Manager</li>
        			<li>Operational Manager</li>
        			<li>Digital Marketing dan Design Manager</li>
        		</ul>

        		<p>
        			dengan syarat dan ketentuan sebagai berikut:
        		</p>

        		<h5> Syarat Umum</h5>

        		<ol>
        			<li> Follow account sosial media japri (Instagram <a href="https://www.instagram.com/japricorp/" target="_blank" rel="noreferrer" style={{ textDecoration: "none"}}>@japricorp</a>) lalu screenshot </li>
        			<li> Sebarluaskan pamplet <a href={oprec} target="_blank" rel="noreferrer" style={{ textDecoration: "none"}}>ini</a> ke 3 group whatsapp lalu screenshot </li>
        			<li> Upload screenshot ke link pendaftaran </li>
        		</ol>


        		<h5> Syarat Khusus</h5>

        		<Grid item xs={12}>
            {Detail.map((item, index) => (
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
                  <h6 style={{ margin: 0, lineHeight: "1.5" }}>{item.tanya}</h6>
                </AccordionSummary>
                <AccordionDetails>
                	<ol>
                	{item.jawab.map((detail, index)=>( 
                		<li><p style={{ margin: 0 }} key={index}>{detail}</p></li>
                	))}
                	</ol>
                </AccordionDetails>
              </Accordion>
            ))}
          	</Grid>

          	<br/>

          	<h5> Ketentuan Umum</h5>
          	<ol>
        			<li> Beriman dan bertaqwa kepada Tuhan YME</li>
        			<li> Berjiwa wirausaha dan mau belajar berwirausaha </li>
        		</ol>
        		<p>
        			Apa sih yang akan kamu dapatkan ketika terpilih menjadi manager di Japri Corp? Tentu kamu nanti akan mendapatkan
        		</p>

        		<ol>
        			<li>Uang ratusan ribu rupiah perbulan</li>
        			<li>Print gratis</li>
        			<li>Belajar berwirausaha</li>
        		</ol>

        		<p>
        			Apabila kamu berminat dan memenuhi ketentuan silakan klik gabung
        		</p>

        		<a href="https://bit.ly/formregistrasimanager" target="_blank" rel="noreferrer">
		           <Button
                variant='contained'
                className="btn-submit"
                size='medium'
                style={{marginBottom: "1rem"}}
              >
               Gabung
              </Button>
        		</a>

        		<p>
        			Pendaftaran terbuka untuk mahasiswa umum yang kuliah di Tasikmalaya. Mari bergabung bersama kami untuk menjadi wirausaha muda ✊
        		</p>
        	</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Karier;