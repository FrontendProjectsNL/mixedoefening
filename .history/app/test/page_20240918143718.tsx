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
      return fetch('https://jsonplaceholder.typicode.com/posts');
    }
    fetchData()
      .then((res) => res.json())
      .then(setData())
      .catch((error) => console.log(error));
    console.log('inside useEffect');
  }, []);

  return (
    <div>
      {data?.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};
export default TestPagina;
