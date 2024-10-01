import React, { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css"

export default function Slider({ slides }) {
  slides = [slides, slides, slides, slides];
  const [slide, setSlide] = useState(0);

  return (
    <Stack
      direction={{ xs: "column", sm: "row-reverse" }}
      alignItems={"center"}
      justifyContent={{ sm: "space-between" }}
      gap={3}
      width={"100%"}
      height={"100%"}
    >
      <Paper
        sx={{
          width: { xs: "100%", sm: "70%" },
          backgroundColor: "transparent",
          borderRadius:"4%",
          boxShadow:"0px 4px 2px -2px #8D7B6890, 0px 2px 2px 1px #8D7B6880, 0px 2px 6px 2px #8D7B6870"
        }}
      >
        <img
          src={slides[slide]}
          alt="product"
          style={{ width: "100%", height: "100%" }}
        />
      </Paper>
      <Box
        sx={{
          width: { xs: "100%", sm: "30%" },
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Swiper
          onActiveIndexChange={(e) => setSlide(e.activeIndex)}
          slidesPerView={3}
          direction={"horizontal"}
          className={"myswipper"}
          breakpoints={{
            600: {
              direction: "vertical",
            },
          }}
        >
          {slides.map((s, i) => (
              <SwiperSlide
                key={i}
                onClick={(e) => setSlide(+e.target.id)}
                className={"swiper-slide"}
              >
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: "4%",
                    boxShadow: "0px 0px 6px 3px #8D7B6880",
                  }}
                >
                  <img id={`${i}`} src={s} alt="product" />
                </Box>
              </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
