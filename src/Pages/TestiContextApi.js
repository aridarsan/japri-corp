import React from 'react';
import AddTestimoni from '../Components/AddTestimoni';
import Testimoni from '../Components/Testimoni';
import ContextState from '../Context/ContextState';

const TestiContextApi = () => {

  return (
    <ContextState>
      <div style={{ margin: '5rem 0' }}>
        <Testimoni display='none' />
        <AddTestimoni />
      </div>
    </ContextState>
  );
};
export default TestiContextApi;
