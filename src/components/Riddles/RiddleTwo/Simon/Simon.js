import React from "react";
import { BlueButton, Container } from "./Simon.style";

function Simon({onButtonClick}) {
  const containersArr = ["top", "right", "bottom", "left"];

  return (
    <Container>
        
      {containersArr.map((position) => (
        <BlueButton key={position} onClick={() => onButtonClick(position)}></BlueButton>
      ))}
    </Container>
  );
}

export default Simon;
