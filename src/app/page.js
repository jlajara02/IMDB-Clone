
'use client'
//import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';



function Home() {
  const IMDBAPI = 'c7d86efee0273e5fa951ad3b0983f65c'; // process.env.IMDB_API_KEY

  console.log("useSearchParams : " + useSearchParams);
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre') || 'fetchTrending';
  //const genre = searchParams
  console.log("genere : " + genre);
  console.log("process.env.IMDB_API_KEY: " + process.env.IMDB_API_KEY )
  console.log("IMDBAPI: " + IMDBAPI )
  //const genre = 'fetchTrending';
  const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/toprated`:`/trending/all/week`}?api_key=${IMDBAPI}&language=en-US`
  
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

  //let dataArray = [];// Array.from(dataJSON)
  //console.log("typeof: " + typeof(dataArray));
  
  //console.log("dataArray :" + dataArray);

  /* let userElements = dataArray.map(function(dataJSON) {
    //let obj =  JSON.stringify(dataArray);
    return dataJSON;
  });
   */

  console.log("userElements :" + dataJSON);

  for (const [key, value] of Object.entries(dataJSON)) {
    //console.log(`Key: ${key}, Value: ${value}`)
    for (const [key1, value1] of Object.entries(value)) {
      console.log(`Key: ${key1}, Value: ${value1}`)
      
    } 
    
  } 

  return (
    <div> home page
    <h2>Movie Title:</h2> 
    <ul>{ 
      //dataArray.forEach((element) => {JSON.stringify(element.title)})

      /* for (const [key, value] of Object.entries(object)) {
        console.log(`Key: ${key}, Value: ${value}`)
      } */
      
      //userElements.forEach((element) => {element.title})
      //userElements
    } </ul>
    </div>
  )
}

export default Home