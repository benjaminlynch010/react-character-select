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
      .catch((err) => {
        alert(`Cannot retrieve gallery. Try again later.`)
        console.log(`GET error | ${err}`)
      })
}

  // function for like button
  const addLike = (item) => {
    item.likes += 1;

    axios.put(`/inventory/${id}`, {likes: item.likes})
      .then((response) => {
        getGallery()
      })
      .catch((error) => {
        alert(`Cannot update likes. Try again later.`)
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
            addLike={addLike}
          />
        </main>
          
      </div>
    );
}

export default App;
