import { persistor } from '../store';

export const purgePersistedData = () => {
  return async (dispatch) => {
    await persistor.purge();
    dispatch({ type: 'PURGE_COMPLETED' }); 
  }
};
