import CarouselCard from "./CarouselCard";
import { InnerSlider, SliderContainer } from "./Styles";
import { getRefValue, useStateRef } from "../lib/Hooks";
import { useRef } from "react";

const items = [
  {
    cardNumber: 1,
    imageSrc: "/pic1.jpeg",
    imageAlt: "A person's eye",
  },
  {
    cardNumber: 2,
    imageSrc: "/pic2.jpeg",
    imageAlt: "A rock formation",
  },
  {
    cardNumber: 3,
    imageSrc: "/pic3.jpeg",
    imageAlt: "Some flowers",
  },
  {
    cardNumber: 4,
    imageSrc: "/pic4.jpeg",
    imageAlt: "An egyptian wall painting",
  },
  {
    cardNumber: 5,
    imageSrc: "/pic5.jpeg",
    imageAlt: "A butterfly on a leaf",
  },
];

const Carousel = () => {
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

  console.log(setOffsetX)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = e.clientX;
  };

  return (
    <>
      <SliderContainer onMouseDown={onMouseDown}>
        <InnerSlider style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}>
          {items.map((item, index) => (
            <CarouselCard key={item.cardNumber || index} {...item} />
          ))}
        </InnerSlider>
      </SliderContainer>
    </>
  );
};

export default Carousel;
