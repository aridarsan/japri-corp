import React from 'react';
import Prestasi from '../Components/Prestasi';
import Galeri from '../Components/Galeri';

const About = () => {
  return (
    <React.Fragment>
      <div style={{margin: "5rem 0"}}>
        <Prestasi />
        <Galeri/>
      </div>
    </React.Fragment>
  );
};
export default About;
