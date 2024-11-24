import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";


import user2 from "../../assets/images/users/11.jpg";
import user3 from "../../assets/images/users/12.jpeg";
import user4 from "../../assets/images/users/13.png";
import user5 from "../../assets/images/users/15.jpg";


const items = [
  
  {
    src: user2,
    altText: "User 2",
    caption: "lol 2024 worlds",
  },
  {
    src: user3,
    altText: "User 3",
    caption: "Final Games",
  },
  {
    src: user4,
    altText: "User 4",
    caption: "Champion",
  },
  {
    src: user5,
    altText: "User 5",
    caption: "All teams qualified for Worlds 2024",
  },
];

const ProjectTables = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img 
          src={item.src} 
          alt={item.altText} 
          className="d-block w-100" 
          style={{
            borderRadius: "7px",
          }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{item.caption}</h5>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={5000} 
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default ProjectTables;
