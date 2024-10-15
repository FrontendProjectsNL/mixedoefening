'use client';
import { useEffect, useState } from 'react';

interface Post {
  userID: number;
  id: number;
  title: string;
  body: string;
}

const TestPagina = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts');
    }
    fetchData()
      .then((res) => res.json())
      .then()
      .catch((error) => console.log(error));
    console.log('inside useEffect');
  }, []);

  return <div>page</div>;
};
export default TestPagina;
