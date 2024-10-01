import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Remove, Add, ShoppingCart } from "@mui/icons-material";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../../Store/Slices/cartSlice";

export default function Cart({ sizes, item,handleToast }) {
  const dispatch = useDispatch();
  // Button Animation
  const [active, setActive] = useState();
  const handleButtonAnimation = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };
  // Handle Cart Quantity
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // Handle Size
  const [size, setSize] = useState("");
  const handleButton = ({ item, size, quantity }) => {
    handleButtonAnimation();
    dispatch(addItem({ item, size, quantity }));
    handleToast(`${quantity} size ${size} ${item?.name} sneakers added to the cart`)
    setQuantity(1);
  };
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      gap={{ xs: "25px", md: "10px", lg: "25px" }}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      <Box
        display="inline-flex"
        alignItems="center"
        gap={1}
        backgroundColor="primary.light"
        borderRadius={2}
        paddingX={1}
      >
        <IconButton onClick={handleDecrease} disabled={quantity === 1}>
          <Remove sx={{ color: "#D04848", cursor: "pointer" }} />
        </IconButton>

        <Typography
          variant="subtitle1"
          color={"primary"}
          sx={{ fontSize: "1.2rem" }}
        >
          {quantity}
        </Typography>
        <IconButton onClick={handleIncrease}>
          <Add sx={{ color: "#0D9276", cursor: "pointer" }} />
        </IconButton>
      </Box>
      <FormControl
        sx={{
          "& label": { color: "primary.dark !important", fontWeight: "500" },
          "& fieldset": { borderColor: "primary.dark" },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.dark !important",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          autoWidth
          label="Size"
          sx={{ width: "100px" }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "primary.light",
                maxHeight: "200px",
                "& .MuiMenuItem-root": {
                  color: "primary.dark",
                },
              },
            },
          }}
        >
          {sizes
            ?.sort((a, b) => a - b)
            .map((e, i) => (
              <MenuItem key={i} value={e}>
                {e}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Button
        disableRipple
        onClick={() => handleButton({ item, size, quantity })}
        className={active ? styles.active : ""}
        sx={{
          height: "56px",
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "primary.dark",
            boxShadow: "0px 0px 6px 2px #8D7B6880",
          },
          "&:hover svg": { color: "primary.light" },
        }}
        disabled={!Boolean(size)}
      >
        <ShoppingCart sx={{ color: "primary.dark" }} />
      </Button>
    </Stack>
  );
}
