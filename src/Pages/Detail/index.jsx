import {
  Box,
  Button,
  Chip,
  Collapse,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Cart from "./Cart";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Toast from "../../Components/Toast";
import { PropagateLoader } from "react-spinners";

export default function Detail() {
  const { list } = useSelector((state) => state.cart);
  console.log(list);
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${process.env.REACT_APP_API}sneakers/${id}`);
        const data = await res.json();
        setProduct(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  // Collapse
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //Toast
  const [toast, setToast] = useState(false);
  const handleToast = (message) => {
    setToast(message);
  };
  return (
    <>
      {
        product?<Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            columnGap: "40px",
            rowGap: "60px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%", lg: "60%" },
              height: { sm: "500px" },
            }}
          >
            {product && <Slider slides={product["main_picture_url"]} />}
          </Box>
          <Box sx={{ width: { xs: "100%", md: "30%", lg: "40%" } }}>
            <Typography
              component={"h2"}
              variant="h3"
              textAlign={"center"}
              color={"primary"}
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.5rem" },
                fontWeight: "500",
              }}
            >
              {product && product["brand_name"]}
            </Typography>
            <Typography
              component={"h1"}
              variant="h5"
              textAlign={"center"}
              gutterBottom
              color={"primary"}
              sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" } }}
            >
              {product?.name}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={4}
              marginBottom={"6%"}
            >
              {product?.gender.map((e, i) => (
                <Chip
                  key={i}
                  label={e.toUpperCase()}
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.dark",
                    fontWeight: "600",
                  }}
                />
              ))}
            </Box>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography variant="subtitle1">Color:</Typography>
              <Box
                sx={{
                  width: "25px",
                  height: "20px",
                  borderRadius: "4px",
                  backgroundColor: product?.color,
                }}
              />
            </Stack>
            <Typography variant="subtitle1">
              Details:{" "}
              <span style={{ fontWeight: "400" }}>{product?.details}</span>
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "8%" }}>
              Release year:{" "}
              <span style={{ fontWeight: "400" }}>
                {product && product["release_year"]}
              </span>
            </Typography>
            <Divider
              sx={{
                width: "50%",
                height: "2px",
                backgroundColor: "primary.dark",
                marginTop: "30px",
              }}
            />
            <Typography variant="subtitle1" sx={{ marginY: "10px" }}>
              Price:{" "}
              <span style={{ fontWeight: "400" }}>
                ${product && product["retail_price_cents"] / 100}
              </span>
            </Typography>
            {product && <Cart sizes={product["size_range"]} item={product} handleToast={handleToast}/>}
          </Box>
        </Stack>
        <Stack
          paddingLeft={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          marginTop={"40px"}
        >
          <Button
            disableRipple
            onClick={handleExpandClick}
            sx={{
              height: "50px",
              width: "180px",
              color: "primary.dark",
              backgroundColor: "primary.light",
              "&:hover": {
                backgroundColor: "primary.light",
                boxShadow: "0px 0px 6px 2px #8D7B6880",
              },
            }}
            endIcon={
              <KeyboardArrowDown
                sx={{
                  transition: "0.3s",
                  transform: `${expanded ? "rotate(180deg)" : "rotate(0deg)"}`,
                  fontSize: "30px !important",
                }}
              />
            }
          >
            {expanded ? "Close the story" : "Open the story"}
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography
              variant="body1"
              paragraph
              dangerouslySetInnerHTML={
                product && { __html: product["story_html"] }
              }
            />
          </Collapse>
        </Stack>
      </Container>:<Stack width={"100%"} minHeight={"80vh"} justifyContent={"center"} alignItems={"center"}><PropagateLoader size={20} color="#8D7B68"/></Stack>
      }
      <Toast toastMessage={toast} />
    </>
  );
}
