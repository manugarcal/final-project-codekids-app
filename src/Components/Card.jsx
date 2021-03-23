import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Cardcomponent = ({
  image = "https://via.placeholder.com/200x200",
  title = "se espera titulo",
  subtitle = "ingresar subtitulo",
  text = "ingresar texto",
  textButton = "borrar o no",
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {subtitle}
          </CardSubtitle>
          <CardText>{text}</CardText>
          <Button>{textButton}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardcomponent;
