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
    console.log('inside useEffect');
  }, []);

  return <div>page</div>;
};
export default TestPagina;
