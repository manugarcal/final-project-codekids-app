import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";

const CardCarousel = ({
  image = "https://via.placeholder.com/200x200",
  title = "se espera titulo",
  subtitle = "ingresar subtitulo",
  text = "",
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle
            tag="h5"
            className=" text-center"
            style={{ color: "black" }}
          >
            {title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-center">
            <p>{subtitle}</p>
            <audio controls></audio>
          </CardSubtitle>
          <CardText className="text-center">{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCarousel;
