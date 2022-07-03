import React, { useEffect, useState } from "react";
import {
  Content,
  LeftImage,
  Main,
  MathProblemImageContainer,
  RightImage,
  Subtitle,
  Title,
} from "./MathRiddle.style";
import MathRiddleRight_icon from "../../assets/images/MathRiddleRight_icon.svg";
import MathRiddleLeft_icon from "../../assets/images/MathRiddleLeft_icon.svg";
import MathProblem from "../../assets/images/MathProblem.svg";
import Answers from "./Answers/Answers";
import Popup from "./Popup/Popup";

function MathRiddle() {
    const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

    useEffect(() => {
        const displayPopupTimeout = setTimeout(() => {
            if(!isPopupDisplayed) togglePopupDisplay();
        }, 60000);

        return () => {
            clearTimeout(displayPopupTimeout);
        }
    }, [])

    const togglePopupDisplay = () => {
        setIsPopupDisplayed(prevState => !prevState);
    }

  return (
    <Main>
      <RightImage src={MathRiddleRight_icon} />
      <LeftImage src={MathRiddleLeft_icon} />

      <Content>
        <Title>Satge #1 -</Title>

        <Subtitle>Solve the myth quote and get your fisrt clue </Subtitle>

        <MathProblemImageContainer>
        <img src={MathProblem} alt="Math question"/>
        </MathProblemImageContainer>

        <Answers displayPopup={togglePopupDisplay}/>

      </Content>
        {isPopupDisplayed && <Popup closePopup={togglePopupDisplay}/>}
    </Main>
  );
}

export default MathRiddle;
