import { useState, useCallback } from 'react';

export default (initialValue: string): any => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
