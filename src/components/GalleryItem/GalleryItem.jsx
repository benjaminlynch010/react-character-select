function GalleryItem({ item }) {

  return (
    <>
      <img src={item.path}/>
      <p>{item.description}</p>
      <p>{item.likes}</p>
    </>
  
  )
}

export default GalleryItem