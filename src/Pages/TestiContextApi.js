import React, { useContext } from 'react';
import AddTestimoni from '../Components/AddTestimoni';
import Testimoni from '../Components/Testimoni';
import ContextState from '../Context/ContextState';
import ContextApi from '../Context/ContextApi';
import Loading from "../Components/Loading"

const TestiContextApi = () => {
  const { loading } = useContext(ContextApi)

  return (
    <ContextState>
    {loading === false ? 
      <div style={{ margin: '5rem 0' }}>
        <Testimoni display='none' />
        <AddTestimoni />
      </div>
    : <Loading/> }
    </ContextState>
  );
};
export default TestiContextApi;
