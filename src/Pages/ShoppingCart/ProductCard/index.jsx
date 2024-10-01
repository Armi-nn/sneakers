import { Add, Remove, RemoveShoppingCart } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Tooltip,
  Zoom,
  Divider,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../../Store/Slices/cartSlice";

export default function ProductCard({ cart,handleToast }) {
  const dispatch = useDispatch();
  const { name, image, price, quantity, size, id } = cart;
  const handleIncrease=()=>{
    dispatch(increaseQuantity({id,size}))
    handleToast(`1 size ${size} ${name} sneakers added to the cart`)
  }
  const handleDeccrease=()=>{
    dispatch(decreaseQuantity({id,size}))
    handleToast(`1 size ${size} ${name} sneakers removed from the cart`)
  }
  const handleRemoveItem=()=>{
    dispatch(removeItem({id,size}))
    handleToast(`All size ${size} ${name} sneakers removed from the cart`)
  }
  const Quantity = (
    <Box
      display="inline-flex"
      alignItems="center"
      gap={1}
      backgroundColor="#E3E1D9"
      borderRadius={2}
      paddingX={1}
    >
      <IconButton onClick={handleDeccrease}>
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
  );


  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} px={1} py={2}>
        <Stack justifyContent={"center"} width={{xs:"10%",md:"5%"}}>
          <Tooltip
            title="Remove"
            TransitionComponent={Zoom}
            slotProps={{
              tooltip: {
                sx: { backgroundColor: "primary.light", color: "primary.dark" },
              },
            }}
          >
            <IconButton onClick={handleRemoveItem} >
              <RemoveShoppingCart  sx={{color:"primary.dark"}}/>
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} width={{xs:"90%",md:"40%"}}>
          <Box component={"img"} src={image} alt={name} title={name} width={"40%"}/>
          <Typography>{name}</Typography>
        </Stack>
        <Box display={{xs:"none",md:"flex"}} width={{md:"55%"}}>
        <Stack justifyContent={"center"} alignItems={"center"} width={"18%"}><Typography>{size}</Typography></Stack>
        <Stack justifyContent={"center"} alignItems={"center"} width={"18%"}><Typography>{price}</Typography></Stack>
        <Stack display={"inline-flex"} alignItems={"center"} justifyContent={"center"} width={"51%"}>{Quantity}</Stack>
        <Stack justifyContent={"center"} alignItems={"center"} width={"18%"}><Typography>{(price*quantity).toFixed(2)}</Typography></Stack>
        </Box>
        <Box display={{xs:"flex",md:"none"}} width={"100%"}>
        <Stack justifyContent={"center"} width={"20%"}><Typography textAlign={"center"}>Size: <span style={{fontWeight:"600"}}>{size}</span></Typography></Stack>
        <Stack justifyContent={"center"} width={"20%"}><Typography textAlign={"center"}>Price: <span style={{fontWeight:"600"}}>{price}$</span></Typography></Stack>
        <Stack display={"inline-flex"} alignItems={"center"} justifyContent={"center"} width={"40%"}>{Quantity}</Stack>
        <Stack justifyContent={"center"} width={"20%"}><Typography textAlign={"center"}>Total: <span style={{fontWeight:"600"}}>{(price*quantity).toFixed(2)}$</span></Typography></Stack>
        </Box>
      </Stack>
      <Divider sx={{ width: "100%" }} />
    </>
  );
}
