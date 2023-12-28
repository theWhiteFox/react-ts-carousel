import CarouselButton from "./CarouselButton";
import { Card } from "./Styles";

const CarouselCard = () => {
  return (
    <Card draggable={false}>
      <div className="card-body">
        <h4>
          <b>Project Title</b>
        </h4>
        <p>Details: </p>
        <p>Date: </p>
        <p>Type: </p>
        <CarouselButton />
        <div className="card-footer">
          <p>Date: </p>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
