import { Box, AppBar, Toolbar, Typography } from "@mui/material"


function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Choose Your Character</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header