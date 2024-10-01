import {
  Stack,
  Button,
  Container,
  Paper,
  Typography,
  Input,
  InputLabel,
  Box,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Toast from "../../Components/Toast";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const { list } = useSelector((state) => state.cart);
  let price = 0;
  list.map((e) => {
    price += e.quantity * e.price;
  });
  //Toast
  const [toast, setToast] = useState(false);
  const handleToast = (message) => {
    setToast(message);
  };
  return (
    <>
      <Container>
        {list.length > 0 ? (
          <Paper sx={{ backgroundColor: "transparent" }}>
            <Stack direction={"row"} alignItems={"center"}></Stack>
            <Stack
              width={"100%"}
              display={{ xs: "none", md: "flex" }}
              direction={"row"}
              py={1}
            >
              <Box width={"5%"}></Box>
              <Typography width={"40%"} textAlign={"center"}>
                Product
              </Typography>
              <Stack direction={"row"} width={"55%"} alignItems={"center"}>
                <Typography width={"18%"} textAlign={"center"}>
                  Size
                </Typography>
                <Typography width={"18%"} textAlign={"center"}>
                  Price
                </Typography>
                <Typography width={"51%"} textAlign={"center"}>
                  Quantity
                </Typography>
                <Typography width={"18%"} textAlign={"center"}>
                  Total Price
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ width: "100%" }} />
            {list?.map((e, i) => (
              <ProductCard key={i} cart={e} handleToast={handleToast} />
            ))}
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "center", md: "space-between" }}
              px={4}
              py={2}
            >
              <Stack
                direction={{ sm: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
                columnGap={2}
                rowGap={1}
              >
                <InputLabel>
                  Discount Code:{" "}
                  <Input
                    sx={{
                      "&::before": { border: "none !important" },
                      "&::after": { border: "none !important" },

                      "& input": {
                        borderRadius: "10px",
                        border: "2px solid",
                        borderColor: "primary.dark",
                      },
                      "& input:focus": {
                        backgroundColor: "primary.light",
                      },
                    }}
                  />
                </InputLabel>
                <Button
                  disableRipple
                  sx={{
                    height: "40px",
                    backgroundColor: "primary.light",
                    color: "primary.dark",
                    padding: "20px",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      boxShadow: "0px 0px 6px 2px #8D7B6880",
                      color: "primary.light",
                    },
                  }}
                >
                  Apply
                </Button>
              </Stack>
              <Divider
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "100%",
                  my: "20px",
                }}
              />
              <Stack alignItems={"center"} rowGap={1}>
                <Typography>
                  Subtotal:{" "}
                  <span style={{ fontWeight: "600" }}>{price.toFixed(2)}$</span>
                </Typography>
                <Stack direction={"row"} gap={2}>
                  <Link to={"/explore"}>
                    <Button
                      disableRipple
                      sx={{
                        height: "40px",
                        backgroundColor: "primary.light",
                        color: "primary.dark",
                        padding: "20px",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          boxShadow: "0px 0px 6px 2px #8D7B6880",
                          color: "primary.light",
                        },
                      }}
                    >
                      continue shopping
                    </Button>
                  </Link>

                  <Button
                    disableRipple
                    sx={{
                      height: "40px",
                      backgroundColor: "primary.light",
                      color: "primary.dark",
                      padding: "20px",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        boxShadow: "0px 0px 6px 2px #8D7B6880",
                        color: "primary.light",
                      },
                    }}
                  >
                    pay
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        ) : (
          <Stack alignItems={"center"} gap={4}>
            <Typography
              variant="h2"
              component={"p"}
              textAlign={"center"}
              sx={{ mt: "20%" }}
            >
              Your cart is empty !!
            </Typography>
            <Link to="/explore">
              <Button
                disableRipple
                sx={{
                  height: "56px",
                  backgroundColor: "primary.light",
                  color: "primary.dark",
                  padding: "25px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    boxShadow: "0px 0px 6px 2px #8D7B6880",
                    color: "primary.light",
                  },
                }}
              >
                Let's go shopping
              </Button>
            </Link>
          </Stack>
        )}
      </Container>
      <Toast toastMessage={toast} />
    </>
  );
}
