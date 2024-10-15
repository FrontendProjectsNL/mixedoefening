import { useEffect, useState } from 'react';

const TestPagina = () => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log('inside useEffect');
  }, []);

  return <div>page</div>;
};
export default TestPagina;
