import React from "react";
import { Carousel } from "react-bootstrap";
import RiddleUpper_icon from "../../assets/images/RiddleUpper_icon.svg";
import RiddleLower_icon from "../../assets/images/RiddleLower_icon.svg";
// import step2 from './../assets/images/step2.png';
// import step3 from './../assets/images/step3.png';
// import step1 from './../assets/images/step1.png';
import {
  Container,
  LeftSection,
  LowerImage,
  Main,
  StyledImage,
  Subtitle,
  Title,
  UpperImage,
} from "./Riddles.style";
import RiddleOne from "./RiddleOne/RiddleOne";
import RiddleThree from "./RiddleThree/RiddleThree";
import RiddleTwo from "./RiddleTwo/RiddleTwo";

const Riddles = () => {
  return (
    <Main>
      <UpperImage src={RiddleUpper_icon} alt="Icon" />
      <LowerImage src={RiddleLower_icon} alt="Icon" />
      {/* <RiddleOne /> */}
      <RiddleTwo />
      {/* <RiddleThree /> */}
    </Main>
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={step1}
    //       alt="First step"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={step2}
    //       alt="Second step"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={step3}
    //       alt="Third step"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
};

Riddles.Container = Container;
Riddles.StyledImage = StyledImage;
Riddles.LeftSection = LeftSection;
Riddles.Title = Title;
Riddles.Subtitle = Subtitle;

export default Riddles;
