import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const CardAudio = ({
  image = "https://via.placeholder.com/200x200",
  title = "se espera titulo",
  subtitle = "ingresar subtitulo",
  text = "",
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="leccion 1" className="img-fluid" />
        <CardBody>
          <CardTitle tag="h5" className="text-black text-center" style={{color: 'black'}}>
            {title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-center">
            <p>{subtitle}</p>
            <audio controls src="https://mus1.djxd.tk/mp3/e81d02f5-68f4-41ff-8def-cd299a5df358.mp3" type="audio/wav"  >
            
            </audio>
          </CardSubtitle>
          <CardText className="text-center">{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardAudio;
