import CarouselCard from "./CarouselCard";
import { CarouselTrack, CarouselContainer } from "./Styles";
import { getRefValue, useStateRef } from "../lib/Hooks";
import { useRef, useState } from "react";
import { CardProps } from "./CarouselCard";
import { getTouchEventData } from "../lib/Dom";
// import { useWindowSize } from "../lib/useWindowSize";

// exported so we can use later in tests
export type Props = {
  items: Array<CardProps>;
  itemsToScroll?: number;
  itemsToShow?: number;
  // Collection of objects with a width, itemsToShow and itemsToScroll
  breakPoints?: {
    width: number;
    itemsToShow?: number;
    itemsToScroll?: number;
  }[];
};

const MIN_SWIPE_REQUIRED = 40;

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
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const minOffsetXRef = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    // we need to check difference in absolute/positive value (if diff is more than 40px)
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    // setCurrentIndex(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  // const indicatorOnClick = (index: number) => {
  //   const containerEl = getRefValue(containerRef);
  //   const containerWidth = containerEl.offsetWidth;

  //   setCurrentIndex(index);
  //   setOffsetX(-(containerWidth * index));
  // };

  // const { width } = useWindowSize();

  return (
    <>
      <CarouselContainer onTouchStart={onTouchStart} onMouseDown={onTouchStart}>
        <CarouselTrack
          ref={containerRef}
          className={`${isSwiping ? "is-swiping" : ""}`}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {items.map((item, index) => (
            <CarouselCard
              // width={getBreakPoint(width)}
              key={index}
              {...item}
            ></CarouselCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
