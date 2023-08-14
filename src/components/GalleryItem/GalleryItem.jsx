import { useState } from 'react'

function GalleryItem({ item, updateLikes }) {

  const [flip, setFlip] = useState(true)

  let toggleImage = () => {
    console.log('In toggleImage -> Click.')
    setFlip(!flip)  
  }

  return (
    <>
    <div className="flip-btn" key={item.id} onClick={toggleImage}>
      {flip ? <img src={item.path} />  : <p>{item.description} </p>}
    </div>

    <div>
    <button onClick={() => updateLikes(item)}>Like</button>
    <p>{item.likes}</p>
    </div>
  </>
  )
}

export default GalleryItem;

