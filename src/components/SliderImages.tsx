"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderImages() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="/assets/carousel/1.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/2.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/3.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/4.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/5.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/6.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/7.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/carousel/8.jpg"
            alt="carousel image"
            width={80}
            height={80}
            priority
          />
        </div>
      </Slider>
    </div>
  );
}
