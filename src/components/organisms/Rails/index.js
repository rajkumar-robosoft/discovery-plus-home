import React from "react";
import Link from "../../atoms/link";
import Image from "../../atoms/image";
import Card from "../../molecules/card";

import "./style.css";

const railsContent = {
  img: [
    "Adventure.jpg",
    "Animals.jpg",
    "Nature.jpg",
    "Auto.jpg",
    "Food.jpg",
    "Science.jpg",

    "Adventure.jpg",
    "Animals.jpg",
    "Nature.jpg",
    "Auto.jpg",
    "Food.jpg",
    "Science.jpg",
  ],
  txt: [
    "Adventure",
    "Animals",
    "Nature",
    "Auto",
    "Food",
    "Science",
    "Adventure",
    "Animals",
    "Nature",
    "Auto",
    "Food",
    "Science",
  ],
};

const Rails = () => {
  return (
    <div className="rails-container">
      <div className="rails">
        {railsContent.img.map((item, index) => {
          return (
            <Card
              img={item}
              txt={railsContent.txt[index]}
              className="rail-box"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rails;
