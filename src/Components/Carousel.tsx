import { useRef } from "react";
import CarouselCard from "./CarouselCard";
import { InnerSlider, SliderContainer } from "./Styles";
import { getRefValue } from "../lib/hooks/useSwipe";
const items = [
  {
    imageSrc: "/pic1.jpeg",
    imageAlt: "A person's eye",
  },
  {
    imageSrc: "/pic2.jpeg",
    imageAlt: "A rock formation",
  },
  {
    imageSrc: "/pic3.jpeg",
    imageAlt: "Some flowers",
  },
  {
    imageSrc: "/pic4.jpeg",
    imageAlt: "An egyptian wall painting",
  },
  {
    imageSrc: "/pic5.jpeg",
    imageAlt: "A butterfly on a leaf",
  },
];

const Carousel = () => {
  // let's say we set the initial value with a type of `number` in `useRef`
  const numberRef = useRef(0);

  // when we use `getRefValue` to get the value of the ref
  // TypeScript would then assume this would return a type of `number`
  getRefValue(numberRef);

  return (
    <>
      <SliderContainer>
        <InnerSlider>
          {items.map((item, idx) => (
            <CarouselCard key={idx} {...item} />
          ))}
        </InnerSlider>
      </SliderContainer>
    </>
  );
};

export default Carousel;
