import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './Components/Search'

function App() {
  const [stateMovieData, setStateMovieData] = useState(null);
  const [stateMovieSelection, setStateMovieSelection] = useState([]);
  const [stateMoviePoster, setStateMoviePoster] = useState('');
  const [stateMovieTitle, setStateMovieTitle] = useState('');
  const [stateMovieYear, setStateMovieYear] = useState('');
  const [stateMovieDirector, setStateMovieDirector] = useState('');
  const [stateMovieActors, setStateMovieActors] = useState('');
  const [stateMovieCountry, setStateMovieCountry] = useState('');
  const [stateMovieGenre, setStateMovieGenre] = useState('');
  let dataSelection = [];
  let test = [];
  let searchInput = 'Your Search';

  const getData = async ()=>{     
    const  API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=9ca99d1c&s=${searchInput}`;     
    
    await fetch(`${API_URL}`)
      .then((response)=> {return response.json()})
      .then((data)=>{
        console.log('fetch started', data);
        setStateMovieData(data);
        console.log(data);
        test = stateMovieData;
        console.log(test);
      })  }
      
      useEffect(()=>{
        // setStateMovieTitle(stateMovieData.Title);
        // setStateMoviePoster(stateMovieData.Poster);
        // setStateMovieYear(stateMovieData.Year);
        // setStateMovieDirector(stateMovieData.Director);
        // setStateMovieActors(stateMovieData.Actors);
        // setStateMovieCountry(stateMovieData.Country);
        // setStateMovieGenre(stateMovieData.Genre);

        const data2 = [...stateMovieData];
        console.log(data2);
        
        if (stateMovieData !== null){
          console.log(stateMovieData);
          let test2 = data2.map(movie=>{<div>{movie[0]}</div>})
        }
      // console.log(stateMovieData);
      
  },[stateMovieData])
  
  const fetchSearchInput = (value)=>{
    searchInput = value;
  }

  return (
    <div>
      <Search onSearchValue={fetchSearchInput} onGetData={getData} />
      {/* <img src={stateMoviePoster}></img>
      <div>{stateMovieTitle}</div>
      <div>{stateMovieYear}</div>
      <div>{stateMovieDirector}</div>
      <div>{stateMovieActors}</div>
      <div>{stateMovieCountry}</div>
      <div>{stateMovieGenre}</div> */}
      {/* <div>{dataSelection}</div> */}
      <div>{test}</div>

    </div>
  );
}

export default App;

// http://www.omdbapi.com/?i=tt3896198&apikey=9ca99d1c


