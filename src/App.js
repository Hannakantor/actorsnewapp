import React from 'react';
import Actor from './data-model/Actor'
import './App.css';
import ActorGallery from './components/ActorGallery'



function App() {
  const actor1dob = new Date()
  const actor1 = new Actor(
  "Kat",
  "Dennings",
  actor1dob,
  "https://www.imdb.com/name/nm0993507/?ref_=nv_sr_srsg_0",
  "https://m.media-amazon.com/images/M/MV5BMTcxNjk2NzA5Ml5BMl5BanBnXkFtZTcwNzIxMDcwOQ@@._V1_.jpg") 
  const actor2 = new Actor(
    "Robert",
    "Sheehan ",
    actor1dob,
    "https://www.imdb.com/name/nm1588066/?ref_=nv_sr_srsg_0",
    "https://m.media-amazon.com/images/M/MV5BMTg4OGNmZmItZjIzZC00MzNlLWJjZjEtNzA4NjZmYWViNDdmXkEyXkFqcGdeQXVyMTYwMDE3NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg") 
     const actor3 = new Actor(
       "Kimberley",
       "Shoniker",
       actor1dob,
       "https://www.imdb.com/name/nm4453350/?ref_=nv_sr_srsg_3",
       "https://m.media-amazon.com/images/M/MV5BOWIwNGUxN2ItY2MxMS00YjA1LThmYTMtMWY5MmM4MjJhZGRhXkEyXkFqcGdeQXVyNDI3MjYyNTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg")



    

  const actorsArray = [
    actor1, actor2, actor3,
  ];

   
  return (
    <div>
      <ActorGallery actorsProp={actorsArray}/>
    </div>
  );
}

export default App;
