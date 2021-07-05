import React from 'react';
import AddTestimoni from '../Components/AddTestimoni';
import Testimoni from '../Components/Testimoni';

const Testimonis = () => {
  return (
    <React.Fragment>
      <div style={{ margin: '5rem 0' }}>
        <Testimoni display='none' />
        <AddTestimoni />
      </div>
    </React.Fragment>
  );
};
export default Testimonis;
