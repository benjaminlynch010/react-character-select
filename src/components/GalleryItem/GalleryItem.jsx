function GalleryItem({ item, updateLikes }) {

  return (
    <div key={item.id}>
      <img src={item.path}/>
      <p>{item.description}</p>
      <button onClick={() => updateLikes(item)}>Like</button>
      <p>{item.likes}</p>
    </div>
  )
}

export default GalleryItem;