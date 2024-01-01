import Button from "./Button";
import { Card } from "./Styles";
export interface CardProps {
  name: string;
  description: string;
  language: string;
  url: string;
  // width?: number | string | undefined;
}

const CarouselCard = ({ name, description, language, url }: CardProps) => {
  return (
    <>
      <Card draggable={false}>
        <div className="card-body">
          <h4>
            <b>Project: {name} </b>
          </h4>
          <p>language: {language}</p>
          <Button onClick={() => window.open(`${url}`, "_blank")}>
            {name}
          </Button>
          <div className="card-footer">
            <p>Description: {description}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CarouselCard;
