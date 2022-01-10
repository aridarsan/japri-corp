import React from 'react';
import Prestasi from '../Components/Prestasi';
import Galeri from '../Components/Galeri';
import Japri from '../Components/Japri';
import Direksi from '../Components/Direksi';
import Video from '../Components/Video';

const About = () => {
  return (
    <React.Fragment>
      <div style={{ margin: '5rem 0' }}>
        <Video/>
        <Japri />
        <Direksi />
        <Prestasi />
        <Galeri />
      </div>
    </React.Fragment>
  );
};
export default About;
