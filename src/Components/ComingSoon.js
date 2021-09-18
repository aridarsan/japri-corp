import React from 'react';
import { Grid, Container} from '@material-ui/core';
import oprec from "../Images/ilustrasi/rekrutmen.svg";


const ComingSoon = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3">
              <span
                className='borderBottom'
              >
                Coming Soon
              </span>
            </h3>

            <p className="pjudul">
              Maaf, belum ada rekrutmen saat ini, kami akan segera memberi kabar jika ada rekrutmen
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} justify="center" alignitems="center">
        	<Grid item xs={12} md={4} lg={6}>
        		<img src={oprec} width="100%" alt="oprec"/>
        	</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default ComingSoon