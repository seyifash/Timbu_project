import React from 'react';
import { useDispatch } from 'react-redux';
import { purgePersistedData } from '../Actions/purge';

const ClearStorageButton = () => {
  const dispatch = useDispatch();

  const handleClearStorage = () => {
    dispatch(purgePersistedData());
  };

  return (
    <button onClick={handleClearStorage}>
      Clear Storage
    </button>
  );
};

export default ClearStorageButton;
