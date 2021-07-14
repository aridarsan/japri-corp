import React, { useReducer } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// Bring the context
import ContextApi from './ContextApi';
// Bring the reducer
import ContextReducer from './ContextReducer';
// Bring the types
import {
  GET_TESTIMONI,
  SET_TESTIMONI,
  CLEAR_TESTIMONI,
  CREATE_TESTIMONI,
  DELETE_TESTIMONI,
} from './ContextTypes';

const ContextState = ({ children }) => {
  const url = 'https://60e46a225bcbca001749e981.mockapi.io/japri/v1/testimoni';

  // Define our state
  const initialState = {
    testi: [],
    data: '',
    loading: true,
  };

  // Dispatch the reducer
  // This come from useReducer from ReactJS
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  // Get testi
  const getTesti = async () => {
    try {
      const testi = await axios.get(url);
      dispatch({ type: GET_TESTIMONI, payload: testi });
      // console.log(testi);
    } catch (err) {
      console.error("ini error massage nya", err.message);
    }
  };

  // Set the testimoni for the new testimoni
  // This will change whenever user type in the form later
  const setTesti = (payload) => {
    dispatch({ type: SET_TESTIMONI, payload });
  };

  // Create testimoni
  const createTesti = async (data) => {
    try {
      const testi = axios.post(url, data);
      dispatch({ type: CREATE_TESTIMONI, payload: testi });
      Swal.fire({
        title: 'Terima kasih',
        text: 'Testimoni kamu sudah kami terima',
        icon: 'success',
        confirmButtonText: 'Ok, Sama-sama',
      });
      dispatch({ type: CLEAR_TESTIMONI });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete Testimoni
  const deleteTesti = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: DELETE_TESTIMONI, payload: id });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Destruct the states
  const { testi, data, loading } = state;

  // Here's where we gonna use this state and funcitons to dealing with the context
  // The context will wrapping our entire application with this component and accept children in it
  // Anything state or function, must be passed in to value props in this provider in order to use it
  // NOTE: PLEASE NOTICE, IF YOU DIDN'T PASS THE STATE OR THE FUNCTION in THIS VALUE PROPS, YOU WILL GET AN ERROR
  return (
    <ContextApi.Provider
      value={{
        testi,
        loading,
        data,
        getTesti,
        setTesti,
        createTesti,
        deleteTesti,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextState;
