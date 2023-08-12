# To Do

### Setup
- Server side GET & PUT provided
- [] Add some images to public/images
- [] Modify `server/modules/data.js` to include:
  - id
  - title
  - description
  - path

### Base
- [] App | Overall application / website
- [] GalleryList | Represents image gallery
- [] GalleryItem | Represents single image
  - [] click handler to toggle between img & desc.
  - [] button to like an img

- [X] axios GET route to retrieve data from /gallery
>GET route in App.jsx?
- [] store data in App.jsx

- [] GalleryList.jsx
  - [X] pass gallery data stored in App - use props
  - [X] iterate the list of gallery data
  - [] make GalleryItems

- [] GalleryItem.jsx
- [] pass the individual item from GalleryList via props
- [] update GalleryList to use for img display
- For Each Item :
  - [] on click -> swap img with it's description
  - [] display # of likes
  - [] like button for each img 
    - [] on click = Axios to update like count at `/gallery/like/:id`
  - [] update the gallery each time a like btn is clicked 