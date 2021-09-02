import { useState, useCallback } from 'react';
//add와 edit에서 input을 사용해서 재사용을 위해 hooks 분리
export default (initialValue: string): any => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
