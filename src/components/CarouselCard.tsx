import CarouselButton from "./CarouselButton";
import { Card } from "./Styles";

interface cardProps {
  cardNumber: number;
  imageSrc: string;
  imageAlt: string;
}

const CarouselCard = ({ cardNumber, imageAlt }: cardProps) => {
  return (
    <Card draggable={false}>
      <div className="card-body">
        <h4>
          <b>Project {cardNumber}: </b>
          {imageAlt}
        </h4>
        <CarouselButton />
        <div className="card-footer">
          <p>Date: </p>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
