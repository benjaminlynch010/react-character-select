import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'
import './App.css';

import GalleryList from '../GalleryList/GalleryList';

function App() {

  // Use an empty array to start
  const [ galleryItems, setGalleryItems ] = useState([]);

  // Run get function when component first hits the DOM
  useEffect(() => {
    getGallery();
  }, []);
  
  // Get data from server-side
  const getGallery = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setGalleryItems(response.data)
      })
      .catch((error) => {
        alert(`Cannot retrieve gallery. Try again later.`)
        console.log(`GET error | ${error}`)
      })
}

  // function for like button
  const updateLikes = (item) => {
    axios
      .put(`/gallery/like/${item.id}`)
        .then((response) => {
          getGallery();
        })
        .catch((error) => {
          alert(`Cannot add like.  Try again later.`)
          console.log(`PUT Error | ${error}`)
        })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <GalleryList 
            galleryItems={galleryItems}
            updateLikes={updateLikes}
          />
        </main>
      </div>
    );
}

export default App;
