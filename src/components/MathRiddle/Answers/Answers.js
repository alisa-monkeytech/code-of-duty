import React, { useState } from 'react';
import { Button, Container, Label } from './Answers.style';
import MathRiddleAnswer1_icon from '../../../assets/images/MathRiddleAnswer1_icon.svg';
import MathRiddleAnswer2_icon from '../../../assets/images/MathRiddleAnswer2_icon.svg';
import MathRiddleAnswer3_icon from '../../../assets/images/MathRiddleAnswer3_icon.svg';

const buttons = [
    {img: MathRiddleAnswer1_icon, answer: 3.44, color: "#1E9796"},
    {img: MathRiddleAnswer2_icon, answer: 126, color: "#FF7B3F"},
    {img: MathRiddleAnswer3_icon, answer: 56.1, color: "#32CC9A"},
]

function Answers({displayPopup}) {
    const [selectedButton, setSelectedButton] = useState();

    const onClickHandler = (answer) => {
        setSelectedButton(answer);
        displayPopup();
    }

    return ( 
        <Container>
            <Label>The answer is</Label>

            {buttons.map(button => (
                <Button key={button.answer} color={button.color} isSelected={selectedButton === button.answer} onClick={() => onClickHandler(button.answer)}>
                    <img src={button.img} alt='Icon'/>
                    {button.answer}</Button>
            ))}
        </Container>
     );
}

export default Answers;