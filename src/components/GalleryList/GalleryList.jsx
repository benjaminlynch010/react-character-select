import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"


function GalleryList({ galleryItems, updateLikes }) {
  console.log('gallery items', galleryItems)
  return (
      
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {galleryItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ bgcolor: "rgba(80, 130, 180, 0.8)", color:"white", height: '100%', display: 'flex', flexDirection: 'column' }}>
              <GalleryItem component="div"
              key={item.id}
              item={item} 
              updateLikes={updateLikes}
              />
            </Card>
        </Grid>
        ))}
        </Grid>
    </Container>

  )
} 

export default GalleryList;