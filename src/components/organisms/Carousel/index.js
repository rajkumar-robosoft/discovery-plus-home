import React, { useState, useEffect } from "react";
import CarouselImage from "../../molecules/carousel-image";
import CarouselDesc from "../../molecules/carousel-desc";
import CarouselIndicator from "../../molecules/carousel-indicator";
import Link from "../../atoms/link";
import Image from "../../atoms/image";
import PlayButton from "../../../assets/images/play.png";
import PrevIcon from "../../../assets/images/previous.png";
import NextIcon from "../../../assets/images/next.png";
import "./style.css";

const carouselContent = [
  {
    heading: "21 Sarfarosh",
    subHeading:
      "This drama recounts the battle of 21 Sikhs versus 12,000 Pashtuns.",
    tag1: "Editor's Pick",
    tag2: "Must Watch",
    image: {
      img: "slider1.jpeg",
      imgAlt: "21 Sarfarosh: Saragarhi 1897",
    },
  },
  {
    heading: "Johnny vs. Amber",
    subHeading:
      "Explosive evidence in a libel case exposes a troubled celebrity marriage.",
    tag1: "Trending",
    tag2: "Recommended",
    image: {
      img: "slider2.jpeg",
      imgAlt: "SJohnny vs. Amber",
    },
  },
  {
    heading: "Being Serena",
    subHeading:
      "Explosive evidence in a libel case exposes a troubled celebrity marriage.",
    tag1: "New",
    tag2: "Stream Now",
    image: {
      img: "slider3.jpeg",
      imgAlt: "Being Serena",
    },
  },
];

const Carousel = () => {
  const [activeContent, setActiveContent] = useState(0);

  useEffect(() => {
    const next = (activeContent + 1) % carouselContent.length;
    const id = setTimeout(() => setActiveContent(next), 3000);
    return () => clearTimeout(id);
  }, [activeContent]);

  const prevContent = (e) => {
    e.preventDefault();

    if (activeContent === 0) setActiveContent(carouselContent.length - 1);
    else setActiveContent(activeContent - 1);

    // setActiveContent(activeContent - 1);
  };

  const nextContent = (e) => {
    e.preventDefault();

    if (activeContent === carouselContent.length - 1) setActiveContent(0);
    else setActiveContent(activeContent + 1);

    // setActiveContent(activeContent + 1);
  };

  const currentContent = (current) => {
    setActiveContent(current);
  };

  return (
    <React.Fragment>
      {carouselContent.map((item, index) => {
        return (
          index === activeContent && (
            <div className="carousel" key={index}>
              <Link onClick={prevContent} className="nav-icon">
                <Image src={PrevIcon} alt="Previous" width="24" />
              </Link>
              <CarouselDesc
                heading={item.heading}
                subHeading={item.subHeading}
                tag1={item.tag1}
                tag2={item.tag2}
                playBtnSrc={PlayButton}
                playText="Play"
                playBtnWidth="90"
                key={index}
              />
              <CarouselImage
                src={item.image.img}
                alt={item.image.imgAlt}
                width="880"
              />
              <Link onClick={nextContent} className="nav-icon">
                <Image src={NextIcon} alt="Next" width="24" />
              </Link>
            </div>
          )
        );
      })}
      <div className="carousel-indicator-pos">
        {carouselContent.map((indicator, index) => {
          return (
            <CarouselIndicator
              key={index}
              onClick={(e) => {
                e.preventDefault();
                currentContent(index);
              }}
              className={
                activeContent === index
                  ? "carousel-indicator-active"
                  : "carousel-indicator-inactive"
              }
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Carousel;
