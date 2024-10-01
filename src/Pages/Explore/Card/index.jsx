import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function ExploreCard({ item }) {
  const { name, grid_picture_url, retail_price_cents, id, slug, gender } = item;
  // Button Animation
  const [active, setActive] = useState();
  const handleButtonAnimation = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };
  return (
    <Grid item xs={10} sm={6} md={4} lg={3}>
      <Card
        elevation={7}
        sx={{
          borderRadius: "10px",
          height: "400px",
          position: "relative",
          boxShadow:
            "0px 4px 2px -2px #8D7B6890, 0px 2px 2px 1px #8D7B6880, 0px 2px 6px 2px #8D7B6870",
        }}
      >
        <Box sx={{ position: "relative", height: "70%" }}>
          <CardMedia
            component="img"
            src={grid_picture_url}
            alt={name}
            title={name}
            sx={{ height: "100%" }}
          />
          {gender.map((sex, index) => (
            <Chip
              key={index}
              label={sex.toUpperCase()}
              sx={{
                position: "absolute",
                bottom: "0px",
                right: "50%",
                transform: "translateX(50%)",
                backgroundColor: "primary.light",
                color: "primary.dark",
                fontWeight: "600",
              }}
            />
          ))}
        </Box>
        <CardContent sx={{ paddingBottom: "0" }}>
          <Typography variant="subtitle2" textAlign={"center"} component={"h3"}>{`${
            name.split(" ").length > 9
              ? name.split(" ").slice(0, 9).join(" ") + "..."
              : name.split(" ").slice(0, 8).join(" ")
          }`}</Typography>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            sx={{
              position: "absolute",
              right: "0",
              bottom: "10px",
              width: "100%",
              paddingX: "20px",
            }}
          >
            <Link to={`/explore/${id}/${slug}`}>
              <Button
                disableRipple
                onClick={handleButtonAnimation}
                className={active ? styles.active : ""}
                sx={{
                  color: "primary.dark",
                  backgroundColor: "primary.light",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    boxShadow: "0px 0px 6px 2px #8D7B6880",
                  },
                }}
              >
                View
              </Button>
            </Link>
            <Typography variant="h6">${retail_price_cents / 100}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
