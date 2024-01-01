import { useState, useRef } from "react";
import { CardProps } from "./CarouselCard";
import { CarouselContainer, CarouselTrack, CarouselItem } from "./Styles";

// exported so we can use later in tests
export type Props = {
  items: Array<CardProps>;
};

// const getBreakPoint = (windowWidth: number) => {
//   if (windowWidth) {
//     if (windowWidth < 480) {
//       return "100%";
//     } else if (windowWidth < 1024) {
//       return "50%";
//     } else if (windowWidth < 1200) {
//       return "33.3%";
//     } else {
//       return "33.3%";
//     }
//   } else {
//     return undefined;
//   }
// };

const Carousel = ({ items }: Props) => {
  const [translateX, setTranslateX] = useState(0);
  const dragStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const handleDragStart = (e: TouchEvent | MouseEvent) => {
    isDragging.current = true;
    dragStartX.current =
      e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e: TouchEvent | MouseEvent) => {
    if (isDragging.current) {
      const currentX =
        e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const deltaX = currentX - dragStartX.current;

      setTranslateX((prevTranslateX) => prevTranslateX + deltaX);

      dragStartX.current = currentX;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;

    // Snap to the nearest item after drag ends
    // (you may want to implement logic to determine the nearest item)
  };

  return (
    <CarouselContainer>
      <CarouselTrack
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={() => handleDragStart}
        onTouchMove={() => handleDragMove}
        onTouchEnd={() => handleDragEnd}
        onMouseDown={() => handleDragStart}
        onMouseMove={() => handleDragMove}
        onMouseUp={() => handleDragEnd}
        onMouseLeave={() => handleDragEnd}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>{item.description}</CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel;
