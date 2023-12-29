import Button from "./Button";
import { Card } from "./Styles";
export interface CardProps {
  cardNumber: number;
  projectSrc: string;
  projectName: string;
  width?: number | string | undefined;
}

const CarouselCard = ({ cardNumber, projectSrc, projectName }: CardProps) => {
  return (
    <>
      <Card draggable={false}>
        <div className="card-body">
          <h4>
            <b>Project {cardNumber}: </b>
            {projectName}
          </h4>
          <Button onClick={() => window.open(`${projectSrc}`, "_blank")}>
            {projectName} Repo
          </Button>
          <div className="card-footer">
            <p>Date: </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CarouselCard;
