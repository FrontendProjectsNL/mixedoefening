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

  // useEffect(() => {
  //   function fetchData() {
  //     return fetch('https://jsonplaceholder.typicode.com/posts');
  //   }
  //   fetchData()
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  //   console.log('inside useEffect');
  // }, []);

  return (
    // <div>
    //   {data?.map((data) => (
    //     <div key={data.id}>{data.title}</div>
    //   ))}
    // </div>
    <div className="h-64 overflow-y-scroll">
      <div className="sticky top-0 bg-blue-500 p-4">Sticky Header</div>
      <div className="h-screen bg-gray-200">
        Scroll to see the sticky header.
      </div>
    </div>
  );
};
export default TestPagina;
