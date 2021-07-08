import React, { useEffect }  from 'react';
import AddTestimoni from '../Components/AddTestimoni';
import Testimoni from '../Components/Testimoni';
import axios from "axios"

const Testimonis = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [testi, setTesti] = React.useState('')

  async function getTestimoni(){
    let res = await axios.get("https://60e46a225bcbca001749e981.mockapi.io/japri/v1/testimoni");
    setTesti(res.data)
    setIsLoading(false)
  }

  useEffect(() =>{
    if (isLoading) {
      getTestimoni()
    }
    // eslint-disable-next-line 
  }, [])

  return (
    <React.Fragment>
      <div style={{ margin: '5rem 0' }}>
        <Testimoni testi={testi} isLoading={isLoading} setIsLoading={setIsLoading} display='none' />
        <AddTestimoni isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    </React.Fragment>
  );
};
export default Testimonis;
