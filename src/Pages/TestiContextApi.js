import React, { useEffect, useContext } from 'react';
import AddTestimoni from '../Components/AddTestimoni';
import Testimoni from '../Components/Testimoni';
import ContextApi from '../Context/ContextApi';
import ContextState from '../Context/ContextState';

const TestiContextApi = () => {
  const { getTesti, testi, loading } = useContext(ContextApi);

  // const [isLoading, setIsLoading] = React.useState(true)
  // const [testi, setTesti] = React.useState('')

  // async function getTestimoni(){
  //   let res = await axios.get("https://60e46a225bcbca001749e981.mockapi.io/japri/v1/testimoni");
  //   setTesti(res.data)
  //   setIsLoading(false)
  // }

  // useEffect(() =>{
  //   if (isLoading) {
  //     getTestimoni()
  //   }
  //   // eslint-disable-next-line
  // }, [])

  useEffect(() => {
    getTesti();
    // eslint-disable-next-line
  }, []);

  return (
    <ContextState>
      {loading ? (
        <h1> Loading </h1>
      ) : (
        <div style={{ margin: '5rem 0' }}>
          <Testimoni testi={testi} display='none' />
          <AddTestimoni />
        </div>
      )}
    </ContextState>
  );
};
export default TestiContextApi;
