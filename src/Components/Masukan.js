import React from 'react';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import masukan from '../Images/masukan.svg';
import Swal from 'sweetalert2'

const Masukan = () => {
  const [nama, setNama] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pesan, setPesan] = React.useState("");

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJXS-nAnD-OZWdCH0UY7OQt6DyfhRi_xTeR9EWg9JbBidDXRjfqtwy2dOhNmA9E1XW/exec'
  const form = document.forms['submitSheet']

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      nama: nama,
      email: email,
      pesan: pesan
    }
    
    if (data.nama, data.email, data.pesan !== ""){
    console.log(data)
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        Swal.fire({
                  title: 'Terima kasih',
                  text: 'masukan kamu sudah kami terima',
                  icon: 'success',
                  confirmButtonText: 'Oke, Sama-sama',
                })
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
      } else {
      Swal.fire({
          title: 'Mohon maaf',
          text: 'tidak boleh ada formulir yang kosong',
          icon: 'warning',
          confirmButtonText: 'Ok, coba lagi',
        })
    }
  }


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
                Saran dan Masukan
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
              Bantu kami untuk memberikan pengalaman transaksi terbaik pada
              konsumen
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <img src={masukan} alt='masukan' width='100%' />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <form onSubmit={handleSubmit} name="submitSheet" noValidate autoComplete='off'>
              <TextField
                name='nama'
                id='nama'
                label='Nama'
                variant='filled'
                color='primary'
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
                onChange={(e)=> setNama(e.target.value)}
                required
              />
              <br />
              <TextField
                name='email'
                id='email'
                label='Email'
                variant='filled'
                color='primary'
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
              <br />
              <TextField
                name= "pesan"
                id='pesan'
                label='Pesan'
                variant='filled'
                color='primary'
                multiline
                rows={5}
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
                onChange={(e)=> setPesan(e.target.value)}
                required
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
                }}
                type="submit"
              >
                Kirim Pesan
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Masukan;
