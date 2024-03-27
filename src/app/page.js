
'use client'
//import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';



function Home() {
  const IMDBAPI = 'c7d86efee0273e5fa951ad3b0983f65c'; // process.env.IMDB_API_KEY

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre') || 'fetchTrending';
  console.log("process.env.IMDB_API_KEY: " + process.env.IMDB_API_KEY )
  console.log("IMDBAPI: " + IMDBAPI );
  console.log("genre: " + genre );
  
  //const genre = 'fetchTrending';
  const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated`:`/trending/all/week`}?api_key=${IMDBAPI}&language=en-US`
  console.log("url :" + url);
  
  const [movieData, setMovieData] = useState(0)
  useEffect (() =>{
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then(jsonData =>{
        //let data = JSON.parse(jsonData);
        //let data = JSON.parse(JSON.stringify(jsonData));
        //console.log("hello:" + jsonData.results);
        setMovieData(jsonData.results)
      })
      
    }

    fetchData();
  }, []);
  
  let dataJSON = JSON.parse(JSON.stringify(movieData));
  //let dataJSON = (JSON.stringify(movieData));
  console.log("dataJSON :" + dataJSON);

  let dataArray = Array.from(dataJSON)
  //console.log("typeof: " + typeof(dataArray));
  
  //console.log("dataArray :" + dataArray);

  let userElements = dataArray.map(function(dataJSON) {
    //console.log("dataArray dataJSON :" + dataJSON.name);
    //let obj =  JSON.stringify(dataArray);
    return <li key={dataJSON.id}> {dataJSON.name} </li>
  }); 

  console.log("userElements :" + userElements);

  return (
    <div> home page <br/>
    Movie Title: <ul>{ 
      //dataArray.forEach((element) => {JSON.stringify(element.title)})

      /* for (const [key, value] of Object.entries(object)) {
        console.log(`Key: ${key}, Value: ${value}`)
      } */
      
      //userElements.forEach((element) => {element.title})
      userElements
    } </ul></div>
  )
}

export default Home