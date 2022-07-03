import React, { useState } from "react";
import RiddleUpper_icon from "../../assets/images/RiddleUpper_icon.svg";
import RiddleLower_icon from "../../assets/images/RiddleLower_icon.svg";
import {
  Container,
  LeftSection,
  LowerImage,
  Main,
  StyledImage,
  Subtitle,
  Title,
  UpperImage,
  Wrapper,
} from "./Riddles.style";
import RiddleOne from "./RiddleOne/RiddleOne";
import RiddleThree from "./RiddleThree/RiddleThree";
import RiddleTwo from "./RiddleTwo/RiddleTwo";
import RiddleFour from "./RiddleFour/RiddleFour";
import Dots from "./Dots/Dots";

const Riddles = () => {
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const riddles = [<RiddleOne />, <RiddleTwo />, <RiddleThree />, <RiddleFour />];
  const dots =  <Dots currentRiddle={currentRiddle} setCurrentRiddle={setCurrentRiddle} riddles={riddles}/>;

  return (
    <Main>
      <UpperImage src={RiddleUpper_icon} alt="Icon" />
      <LowerImage src={RiddleLower_icon} alt="Icon" />

      {currentRiddle === 0 && <RiddleOne dots={dots} />}
      {currentRiddle === 1 && <RiddleTwo dots={dots}/>}
     {currentRiddle === 2 && <RiddleThree dots={dots}/>}
      {currentRiddle === 3 && <RiddleFour dots={dots}/>}

    </Main>
  );
};

Riddles.Container = Container;
Riddles.StyledImage = StyledImage;
Riddles.LeftSection = LeftSection;
Riddles.Title = Title;
Riddles.Subtitle = Subtitle;
Riddles.Wrapper = Wrapper;

export default Riddles;
