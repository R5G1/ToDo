/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(''),
  };
};
