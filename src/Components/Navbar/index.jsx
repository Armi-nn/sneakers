import { Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import logo from "./logo.png";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { list } = useSelector((state) => state.cart);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ paddingX: { xs: "25px", sm: "50px", md: "80px" }, paddingY: "10px" }}
    >
      <Box display="flex" alignItems={"center"}>
        <Box component={"img"} src={logo} alt="logo" sx={{ width: "100px" }} />
        <Stack direction={"row"} alignItems={"end"}>
          <Typography variant="h5" lineHeight="0.8">
            SNKR
          </Typography>
          <Typography variant="body2" lineHeight="1.1">
            .hub
          </Typography>
        </Stack>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        gap={{ xs: "15px", md: "20px" }}
        sx={{
          "& a": { color: "black", fontSize: "18px", fontWeight: "500" },
          "& a:not(:last-child):hover": {
            textDecoration: "underline !important",
            textDecorationColor:"primary.dark",
            color:"primary.dark"
          },
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/Explore">Explore</Link>
        <Link to="/shoppingcart">
          <Badge
            badgeContent={list.length}
            sx={{
      
              "& span":{transition: "all 0.5s",backgroundColor: "primary.dark", color: "primary.light"},
              "&:hover span": { color: "primary.dark", backgroundColor: "primary.light" },
              "&:hover svg":{ backgroundColor: "primary.dark", color: "primary.light"}
            }}
          >
            <ShoppingCart
              sx={{
                transition: "all 0.5s",
                color: "primary.dark",
                backgroundColor: "primary.light",
                borderRadius: "50%",
                padding: "6px",
                width: "1.5em",
                height: "1.5em",
              }}
            />
          </Badge>
        </Link>
      </Box>
    </Box>
  );
}
