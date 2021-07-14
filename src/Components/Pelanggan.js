import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router-dom';

const Pelanggan = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/pelanggan');
  }
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
                style={{ borderBottom: '.25rem solid #0895CA' }}
              >
                Pelanggan
              </span>
            </h3>

            <p className="pjudul"
            >
              Kami telah dipercaya oleh mahasiswa dari berbagai kampus dan
              organisasi/ komunitas
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          {props.customer.map((item, index) => (
            <Grid item xs={2} md={2} lg={1} m='auto' key={index}>
              <img src={item.image} alt={item.nama} width='100%' />
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '.8rem',
                  marginTop: '.5rem',
                  marginBottom: 0,
                  fontWeight: '600',
                }}
              >
                {item.nama}
              </p>
            </Grid>
          ))}
        </Grid>

        <Grid container justify='center'>
          <Button
            m='auto'
            variant='contained'
            style={{
              backgroundColor: '#0895CA',
              fontWeight: '600',
              color: '#ffffff',
              borderRadius: '0',
              fontFamily: 'Montserrat',
              display: props.display,
            }}
            onClick={handleClick}
            size='medium'
          >
            {' '}
            Lihat Lebih banyak <ChevronRightIcon />
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Pelanggan;
