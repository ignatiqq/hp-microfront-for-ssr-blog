import React, { useEffect, useState } from 'react';

const Homepage: React.FC<{path: string}> = ({path = '/'}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    (function() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => res.json())
                .then(data => data)
                .catch(err => err);
    })().then(data => setData(data)).catch(err => setError((err as Error).message)).finally(() => setLoading(false))
  }, [])

  if(isLoading) {
    return <div>Loading posts...</div>
  }

  if(error) {
    return <div style={{color: 'red'}}>{error}</div>
  } 

  return (
    <div>Hello i'm homepage. The path is: {path}. Title: {(data as any)?.title}</div>
  )
}

export default Homepage;