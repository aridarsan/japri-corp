import React from 'react';
import Prestasi from '../Components/Prestasi';
import Galeri from '../Components/Galeri';
import Japri from '../Components/Japri';

const About = () => {
  return (
    <React.Fragment>
      <div style={{margin: "5rem 0"}}>
        <Japri/>
        <Prestasi />
        <Galeri/>
      </div>
    </React.Fragment>
  );
};
export default About;
