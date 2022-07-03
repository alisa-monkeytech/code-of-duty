import React from "react";
import { BlueButtons, Container } from "./Simon.style";

function Simon() {
  const containersArr = ["top", "right", "bottom", "left"];

  return (
    <Container>
        
      {containersArr.map((position) => (
        <BlueButtons key={position}></BlueButtons>
      ))}
    </Container>
  );
}

export default Simon;
