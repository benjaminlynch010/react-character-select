import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryItems }) {
  console.log('gallery items', galleryItems)
  return (
    <section>
      {galleryItems.map((item) => (
        <GalleryItem 
        key={item.id}
        item={item}
        addLike={addLike}
        />
      ))}
    </section>
  )
} 

export default GalleryList;