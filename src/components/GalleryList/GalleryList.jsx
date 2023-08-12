import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ galleryItems, updateLikes }) {
  console.log('gallery items', galleryItems)
  return (
    <section>
      {galleryItems.map((item) => (
        <GalleryItem 
        key={item.id}
        item={item}
        updateLikes={updateLikes}
        />
      ))}
    </section>
  )
} 

export default GalleryList;