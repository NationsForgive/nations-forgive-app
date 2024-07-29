"use client";
import Slider from "react-slick";
import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const IMAGES = [
  "/carousel-01.png",
  "/carousel-02.png",
  "/carousel-03.png",
  "/carousel-04.png",
  "/carousel-05.png",
  "/carousel-06.png",
  "/carousel-07.png",
  "/carousel-08.png",
  "/carousel-09.png",
  "/carousel-10.png",
  "/carousel-11.png",
  "/carousel-12.png",
];
const settings = {
  dots: true,
  infinite: true,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
      },
    },
  ],
};

export default function SliderImages() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className="slider-container" sx={{ width: "100%" }}>
      <Slider {...settings}>
        {IMAGES.map((image: string, index: number) => (
          <Box key={index}>
            <Image
              src={image}
              alt={`Carousel image ${index}`}
              objectFit="cover"
              width={300}
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
