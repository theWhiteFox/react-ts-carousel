import CarouselCard from "./CarouselCard";
import { InnerSlider, SliderContainer } from "./Styles";

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
