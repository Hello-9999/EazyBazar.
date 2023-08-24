import { Button } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
// import Container from "react-bootstrap/esm/Container";
import { Container } from "react-bootstrap";
function Homecarousel() {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{ backgroundColor: "aliceblue", position: "relative" }}
    >
      <Carousel.Item className="First">
        <div className="col-5 text">
          <h6>fashion Sale</h6>
          <h4>MInimal Men Style</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            iste.
          </p>

          <Button > Shop Now </Button>
        </div>
      </Carousel.Item>

      <Carousel.Item className="Second">
        <div className="col-5 text">
          <h6>fashion Sale</h6>
          <h4>MInimal Men Style</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            iste.
          </p>

          <Button > Shop Now </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homecarousel;
