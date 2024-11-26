"use client"
import React, { useState } from "react";
import { Menu } from '../../helpers/dummy';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Listing = (props: any) => {
  console.log("🚀 ~ Listing ~ props:====", props)
  const { menuItems } = props;

  const toggleLike = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems[index].liked = !updatedItems[index].liked;
    // setMenuItems(updatedItems);
  };

  return (
    <Container sx={{ py: 5 }}>
      <h2 className="text-center text-3xl font-bold font-serif mb-10 mt-20 text-orange-500">Explore Our Menu</h2>
      <Grid container spacing={2}>
        {menuItems.map((item:any, index:any) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index + 1}>
            <Card
              sx={{
                position: "relative",
                height: '100%', // Ensure card takes full height of the grid item
                display: 'flex',
                flexDirection: 'column',
                border: "1px solid rgba(0, 0, 0, 0.12)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(255, 165, 0, 0.1)",
                },
              }}
            >
              <IconButton
                onClick={() => toggleLike(index)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "white",
                }}
              >
                {/* {item.liked ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )} */}
              </IconButton>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent
                sx={{
                  flexGrow: 1, // Ensures that the content stretches to fill the card
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Distribute content evenly
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ color: '#FF5722', fontWeight: 'bold', fontFamily: 'Arial' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'sans', fontFamily: 'Georgia' }}>
                  {item.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, color: '#4CAF50', fontFamily: 'Arial', fontWeight: 'bold' }}>
                  ${item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    mv:2,
                    backgroundColor:'orange',
                    width: '100%', // Full width by default
                    fontSize: '14px', // Smaller font size for all screens
                    whiteSpace: 'nowrap', // Prevent text wrapping
                    '@media (max-width: 700px)': {
                      width: '80%', // Adjust width on mobile
                      fontSize: '11px', // Even smaller font on mobile
                      alignSelf: 'center', // Center button horizontally
                    },
                  }}
                  onClick={() => alert(`Added ${item.title} to cart`)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Listing;
