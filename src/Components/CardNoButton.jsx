import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const CardNoButton = ({
  image = "https://via.placeholder.com/200x200",
  title = "se espera titulo",
  subtitle = "ingresar subtitulo",
  text = "ingresar texto",
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-black text-center">
            {title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-center">
            {subtitle}
          </CardSubtitle>
          <CardText className="text-center">{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardNoButton;
