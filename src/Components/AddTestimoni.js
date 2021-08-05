import React, { useContext, useRef } from 'react';
import { Grid, Container, TextField, Button, Typography, Box, IconButton, InputAdornment, Hidden } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import testimoni from '../Images/ilustrasi/testimoni.svg';
import Swal from 'sweetalert2';
import ContextApi from '../Context/ContextApi';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from "axios"

const pic = "https://i.ibb.co/ZxrWLbJ/img-569204.png"

const AddTestimoni = (props) => {
  const [nama, setNama] = React.useState('')
  const [nilai, setNilai] = React.useState(0)
  const [pesan, setPesan] = React.useState('')
  const [produk, setProduk] = React.useState('')
  const [profil, setProfil] = React.useState(pic)
  const [gambar, setGambar] = React.useState(null);
  const [upload, setUpload] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const inputFile = useRef(null);
  const onTextClick = () => {
    inputFile.current.click();
  };

  //Validation
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

  //Define context
  const { getTesti, setTesti, createTesti } = useContext(ContextApi)

  //Create new Testimoni
  const onCreateTesti = (e) => {
    e.preventDefault()

    if(validation() !== false){
      const data = {
        nama: nama,
        produk: produk,
        nilai: nilai,
        pesan: pesan,
        avatar: profil
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

  //url imgbb / image hosting
  const url = "https://api.imgbb.com/1/upload?expiration=0&key=e94ee26fef2703f75e715fe65578a0d2";

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpload(true)
    console.log("submit.....");

  if(gambar !== null){
    let formdata = new FormData();
    // formdata.append("nama", nama);
    formdata.append("image", gambar);

    console.log(gambar);

    const config = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    };

    // Upload image to hosting
    axios
      .post(url, formdata, config)
      .then((res) => {
        console.log(res);
        setProfil(res.data.data.image.url);
        setUpload(false)
        Swal.fire({
        title: 'Sukses',
        text: 'Foto sudah di upload',
        icon: 'success',
        confirmButtonText: 'Oke, lanjut',
      });
      })
      .catch((error) => {
        console.log(error)
        setUpload(false)
        Swal.fire({
        title: 'Maaf',
        text: 'terjadi kesalahan',
        icon: 'warning',
        confirmButtonText: 'Ok, coba lagi',
      });
      });
    }else{
            setUpload(false)
            Swal.fire({
            title: 'Maaf',
            text: 'anda belum memilih gambar',
            icon: 'warning',
            confirmButtonText: 'Ok, coba lagi',
          });
        }
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   setUpload(true)
  //   if(gambar !== null){
  //     let formdata = new FormData();
  //     formdata.append("image", gambar);

  //     console.log(gambar);

  //     const config = {
  //       headers: {
  //         "Content-type": "multipart/form-data"
  //       }
  //     };
  //     await uploadImage(url, formdata, config)  
  //     setUpload(false)
  //     setProfil(image.data.data.image.url);
  //     console.log(image)
  //   }else{
  //       setUpload(false)
  //       Swal.fire({
  //       title: 'Maaf',
  //       text: 'anda belum memilih gambar',
  //       icon: 'warning',
  //       confirmButtonText: 'Ok, coba lagi',
  //     });
  //   }
  // }

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
          <Hidden smDown>
            <Grid item xs={12} md={6} lg={6}>
              <img src={testimoni} alt='masukan' width='100%' />
            </Grid>
          </Hidden>

          <Grid item xs={12} md={6} lg={6}>
            <form noValidate name='submitTesti' autoComplete='off'>

            <Grid container justify="center" alignItems="center">
              <Grid item lg={4} md={4} xs={4}>
              <h5 style={{textAlign: "center"}}>Foto Profil</h5>
                <img
                  src={profil}
                  style={{
                    objectFit: "cover",
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "50%",
                    position: "relative",
                    cursor: "pointer",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="img-profil"
                  alt="gambar"
                  width="100%"
                  onClick={onTextClick}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
              <Grid item lg={9} md={9} xs={9}>
                <input
                  id='profil'
                  type="file"
                  ref={inputFile}
                  className="inputan"
                  style={{marginTop: "1rem", border: "2px solid #0895ca", padding: ".25rem"}}
                  onChange={(e) => setGambar(e.target.files[0])}
                />
              </Grid>
              <Grid item lg={3} md={9} xs={3}>
                {upload ===false ? 
                  <Button 
                    onClick={handleSubmit} 
                    variant="contained" 
                    className="btn-submit" 
                    fullWidth 
                    size="large"
                    style={{margin: "1rem 0", padding: "0.7rem"}}>
                    <CloudUploadIcon/> &nbsp;Unggah
                  </Button>
                    : 
                  <Button  
                    variant="contained" 
                    disabled={true}
                    className="btn-second"
                    fullWidth 
                    size="large"
                    style={{margin: "1rem 0", padding: "0.7rem"}}
                    >
                    tunggu...
                  </Button>
                }
              </Grid>
            </Grid>
            <p style={{textAlign: "center"}}>Klik gambar atau formulir untuk pilih foto, kemudian klik unggah</p>

              <Grid container spacing={2}>
                <Grid item lg={6}  md={6} xs={12}>
                  <TextField
                    id='nama'
                    label='Nama'
                    variant='filled'
                    color='primary'
                    value={nama}
                    className='inputan'
                    onChange={(e)=> setNama(e.target.value)}
                    helperText={nama.length + "/20 karakter"}
                    InputProps={{
                      readOnly: nama.length >= 20 ? true : false ,
                      endAdornment: 
                      <InputAdornment position="end">                      
                        <IconButton
                              aria-label="toggle-nama"
                              onClick={() => setNama("")}
                            >
                              <CloseIcon />
                        </IconButton>
                      </InputAdornment>,
                    }}
                  />
                  </Grid>

                  <Grid item lg={6} md={6} xs={12}>
                    <TextField
                      id='produk'
                      label='Produk'
                      variant='filled'
                      color='primary'
                      value={produk}
                      className='inputan'
                      onChange={(e)=> setProduk(e.target.value)}
                      helperText={produk.length + "/25 karakter"}
                      InputProps={{
                        readOnly: produk.length >= 25 ? true : false ,
                        endAdornment: 
                        <InputAdornment position="end">                      
                          <IconButton
                                aria-label="toggle-produk"
                                onClick={() => setProduk("")}
                              >
                                <CloseIcon />
                          </IconButton>
                        </InputAdornment>,
                      }}
                    />
                  </Grid>
                </Grid>

              <Box component='fieldset' mb={2} borderColor='transparent'>
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
                value={pesan}
                multiline
                rows={5}
                mb={3}
                className='inputan'
                onChange={(e)=> setPesan(e.target.value)}
                helperText={pesan.length + "/250 karakter"}
                InputProps={{
                  readOnly: pesan.length >= 250 ?  true : false ,
                  endAdornment: 
                  <InputAdornment position="end">                      
                    <IconButton
                          aria-label="toggle-nama"
                          onClick={() => setPesan("")}
                        >
                          <CloseIcon />
                    </IconButton>
                  </InputAdornment>,
                }}
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
