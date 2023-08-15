import { useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'

function GalleryItem({ item, updateLikes }) {

  const [flip, setFlip] = useState(true)

  let toggleImage = () => {
    console.log('In toggleImage -> Click.')
    setFlip(!flip)  
  }

  return (
    <>
    <Container variant="contained" key={item.id} onClick={toggleImage}>
      {flip ? 
        <img src={item.path} style={{ height: 150}} />  
        : <p >{item.description} </p>}
    </Container>

    <div>
    <Button variant="contained" onClick={() => updateLikes(item)}>Like</Button>
    <p>{item.likes}</p>
    </div>
  </>
  )
}

export default GalleryItem;

