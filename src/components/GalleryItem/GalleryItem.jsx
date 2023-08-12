function GalleryItem({ item, addLike }) {

  return (
    <>
      <img src={item.path}/>
      <p>{item.description}</p>
      <button onClick={() => addLike(item)}>💖</button>
      <p>{item.likes}</p>
    </>
  
  )
}

export default GalleryItem