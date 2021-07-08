import React from 'react';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import testimoni from '../Images/testimoni.svg';
import axios from "axios";
import Swal from 'sweetalert2';

const AddTestimoni = (props) => {
  const [nama, setNama] = React.useState('')
  const [nilai, setNilai] = React.useState(0)
  const [pesan, setPesan] = React.useState('')
  const [produk, setProduk] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

     const validation = () => {
    if (nama === "") {
      return false;
    } else if (produk === "") {
      return false;
    } else if (pesan === ""){
      return false
    } else if (nilai === ""){
      return false
    } else{
      setIsSubmitting(true)
    }
  } 

  async function postTestimoni(data){
    let res = await axios.post("https://60e46a225bcbca001749e981.mockapi.io/japri/v1/testimoni", data);
    console.log(res)
    Swal.fire({
      title: 'Terima kasih',
      text: 'Testimoni kamu sudah kami terima',
      icon: 'success',
      confirmButtonText: 'Ok, Sama-sama',
    });
    setIsSubmitting(false)
    props.setIsLoading(true)
  }


  const handleAdd= (e) => {
    e.preventDefault();
    if(validation() !== false){
    console.log(nama, produk, nilai, pesan)
      const data = {
        nama: nama,
        produk: produk,
        nilai: nilai,
        pesan: pesan
      }
      postTestimoni(data)
    } else {
        Swal.fire({
          title: 'Maaf',
          text: 'tidak boleh ada formulir yang kosong',
          icon: 'warning',
          confirmButtonText: 'Ok, coba lagi',
        });
      }
  }
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3 className='heading3'>
              <span className='borderBottom'>Tambah Testimoni</span>
            </h3>

            <p className='pjudul'>
              Katakan bagaimana pengalaman transaksi anda di Japri
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <form noValidate autoComplete='off'>
              <TextField
                id='nama'
                label='nama'
                variant='filled'
                color='primary'
                className='inputan'
                onChange={(e)=> setNama(e.target.value)}
              />
              <br />
              <TextField
                id='produk'
                label='produk'
                variant='filled'
                color='primary'
                className='inputan'
                onChange={(e)=> setProduk(e.target.value)}
              />
              <br />
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend'>Nilai</Typography>
                <Rating
                  name="simple-controlled"
                  value={nilai}
                  onChange={(event, newValue) => {
                    setNilai(newValue);
                  }}
                  size="large"
                />
              </Box>
              <TextField
                id='pesan'
                label='pesan'
                variant='filled'
                color='primary'
                multiline
                rows={5}
                className='inputan'
                onChange={(e)=> setPesan(e.target.value)}
              />
              <br />
              <Button
                variant='contained'
                size='large'
                style={{
                  backgroundColor: '#0895CA',
                  fontWeight: '600',
                  color: '#ffffff',
                  borderRadius: '0',
                  fontFamily: 'Montserrat',
                  marginTop: '2rem',
                  cursor: isSubmitting ? "not-allowed" : ""
                }}
                onClick={handleAdd}
                type="submit"
              >
                {isSubmitting? "loading" : "Kirim Pesan"}
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <img src={testimoni} alt='masukan' width='100%' />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default AddTestimoni;
