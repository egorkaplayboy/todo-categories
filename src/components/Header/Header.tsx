import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box sx={{marginBottom: 3}}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h5" color="inherit" component="h1">
            Задачник
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
