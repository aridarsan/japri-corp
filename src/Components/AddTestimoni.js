import React, { useContext } from 'react';
import { Grid, Container, TextField, Button, Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import testimoni from '../Images/testimoni.svg';
import Swal from 'sweetalert2';
import ContextApi from '../Context/ContextApi';

const AddTestimoni = (props) => {
  const [nama, setNama] = React.useState('')
  const [nilai, setNilai] = React.useState(0)
  const [pesan, setPesan] = React.useState('')
  const [produk, setProduk] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const validation = () => {
    if (nama === "") {
      return false;
    } else if (produk === ""){
      return false;
    } else if (pesan === ""){
      return false;
    } else if (nilai === ""){
      return false;
    } else{
      setIsSubmitting(true)
    }
  }

  const form = document.forms['submitTesti'];

  const { getTesti, setTesti, createTesti } = useContext(ContextApi)

  const onCreateTesti = (e) => {
    e.preventDefault()

    if(validation() !== false){
      const data = {
        nama: nama,
        produk: produk,
        nilai: nilai,
        pesan: pesan
      }
      setTesti(data)
      createTesti(data)
      setIsSubmitting(false)
      getTesti()
      form.reset()
    }else {
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
            <img src={testimoni} alt='masukan' width='100%' />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <form noValidate name='submitTesti' autoComplete='off'>
              <TextField
                id='nama'
                label='Nama'
                variant='filled'
                color='primary'
                className='inputan'
                onChange={(e)=> setNama(e.target.value)}
              />
              <br />
              <TextField
                id='produk'
                label='Produk'
                variant='filled'
                color='primary'
                className='inputan'
                onChange={(e)=> setProduk(e.target.value)}
              />
              <br />
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend'>Penilaian</Typography>
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
                label='Pesan'
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
                className="btn-submit"
                style={{
                  cursor: isSubmitting ? "not-allowed" : ""
                }}
                onClick={onCreateTesti}
                type="submit"
              >
                {isSubmitting ? "loading..." : "Kirim Pesan"}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default AddTestimoni;
