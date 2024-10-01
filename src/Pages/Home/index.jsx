import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1">AIR MAX</Typography>
      <Box
        component="img"
        src="assets/images/hero-img.png"
        alt="sneaker"
        sx={{
          position: "absolute",
          zIndex: "10",
          top: "50%",
          left: "50%",
          height: "100%",
          transition: "all 0.5s",
          transform: {
            xs: "translate(-50%,-50%) scale(80%)",
            sm: "translate(-50%,-50%)",
          },
          "&:hover": {
            transform: {
              xs: "translate(-50%,-47%) scale(80%)",
              sm: "translate(-50%,-47%)",
            },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: {
            md: "25px",
          },
          bottom: { xs: "40px", md: "inherit" },
          zIndex: "100",
        }}
      >
        <Link to="/explore">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "rgb(42,42,42)",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Explore
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
