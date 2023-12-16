import CarouselButton from "./CarouselButton";
import { Card } from "./Styles";

const CarouselCard = () => {
  return (
    <Card>
      <div className="card">
        <div className="container">
          <h4>
            <b>Carousel Card</b>
          </h4>
          <br />
          <p>Swipe left</p>
          <CarouselButton />
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
