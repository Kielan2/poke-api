import React, { useState, useEffect } from 'react';
	
	let url = 'https://pokeapi.co/api/v2/pokemon/'

  const Fetch = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  fetch(url, {
		method: 'GET',  
		headers: {
		  'Content-Type': 'application/json'
		}
	  })
		.then((response) => {
		  if (!response.ok) throw new Error('Network response was not ok');
		  return response.json();
		})
		.then((data) => {
		  setData(data);
		  setLoading(false);
		  console.log(data)
		})
		.catch((error) => {
		  setError(error);
		  setLoading(false);
		});
	}, []);
  
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
  
	return (
		<div>
		  <h1>Data:</h1>
		  <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render the fetched data */}
		</div>
	  );
  };

  export default Fetch;
  
  