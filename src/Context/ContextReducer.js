import {
  GET_TESTIMONI,
  SET_TESTIMONI,
  CLEAR_TESTIMONI,
  CREATE_TESTIMONI,
  DELETE_TESTIMONI,
  UPLOAD_IMAGE
} from './ContextTypes';

// eslint-disable-next-line
export default (state, { type, payload }) => {
  switch (type) {
    
    // Get all testimoni
    case GET_TESTIMONI:
      return {
        ...state,
        loading: false,
        testi: payload,
      };

    // Set testimoni
    case SET_TESTIMONI:
      return {
        ...state,
        data: payload,
      };

    // Create a new testimoni
    case CREATE_TESTIMONI:
      return {
        ...state,
        loading: true,
      };

    // Clear testi data after create
    case CLEAR_TESTIMONI:
      return {
        ...state,
        data: '',
      };

    // Delete a testi
    case DELETE_TESTIMONI:
      return {
        ...state,
        testi: state.testi.filter((test) => test.id !== payload),
      };

    //Upload Image
    case UPLOAD_IMAGE:
      return {
        ...state,
        image: payload,
      };

    default:
      return state;
  }
};
