import React, { useState } from "react";
import { Button, Container } from "./Puzzle.style";
import RiddleFourPuzzle1_icon from "../../../../assets/images/RiddleFourPuzzle1_icon.svg";
import RiddleFourPuzzle2_icon from "../../../../assets/images/RiddleFourPuzzle2_icon.svg";
import RiddleFourPuzzle3_icon from "../../../../assets/images/RiddleFourPuzzle3_icon.svg";
import RiddleFourPuzzle4_icon from "../../../../assets/images/RiddleFourPuzzle4_icon.svg";
import RiddleFourPuzzle5_icon from "../../../../assets/images/RiddleFourPuzzle5_icon.svg";
import RiddleFourPuzzle6_icon from "../../../../assets/images/RiddleFourPuzzle6_icon.svg";
import RiddleFourPuzzle7_icon from "../../../../assets/images/RiddleFourPuzzle7_icon.svg";
import RiddleFourPuzzle8_icon from "../../../../assets/images/RiddleFourPuzzle8_icon.svg";

const buttonsArr = [
  RiddleFourPuzzle1_icon,
  RiddleFourPuzzle2_icon,
  RiddleFourPuzzle3_icon,
  RiddleFourPuzzle4_icon,
  RiddleFourPuzzle5_icon,
  RiddleFourPuzzle6_icon,
  RiddleFourPuzzle7_icon,
  RiddleFourPuzzle8_icon,
];

function Puzzle({setIndexes}) {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const onClickHandler = (index) => {
    if (selectedButtons.includes(index))
      setSelectedButtons((prevSelectedButtons) =>
        prevSelectedButtons.filter((button) => button !== index)
      );
    else
      setSelectedButtons((prevSelectedButtons) => [
        ...prevSelectedButtons,
        index,
      ]);

    setIndexes(index+"");
  };

  return (
    <Container>
      {buttonsArr.map((img, index) => (
        <Button
          key={index}
          id={index}
          isSelected={selectedButtons.includes(index)}
          onClick={() => onClickHandler(index)}
        >
          <img src={img} alt="Symbol" />
        </Button>
      ))}
    </Container>
  );
}

export default Puzzle;
