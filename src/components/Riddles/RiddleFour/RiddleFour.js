import React, { useEffect, useState } from 'react';
import Riddles from '../Riddles';
import Puzzle from './Puzzle/Puzzle';
import { Label } from './RiddleFour.style';
import RiddleFour_icon from '../../../assets/images/RiddleFour_icon.svg';

const hiddenSolution = "3258346";

function RiddleFour({dots}) {
    const [currentSolution, setCurrentSolution] = useState("");

    useEffect(() => {
        if(!hiddenSolution.startsWith(hiddenSolution)) {
            alert('wrong!');
            setCurrentSolution('');
        }
    }, [currentSolution]);

    const handleSetIndexes = (index) => {
        setCurrentSolution(currentSolution + index);
    }

    return ( 
        <Riddles.Wrapper background='#222821'>
        <Riddles.Container background='#222821'>
                <Riddles.LeftSection>
                    <Riddles.Title color='#FEA614'>Yum Kaax</Riddles.Title>

                    <Puzzle setIndexx={handleSetIndexes}/>

                    <Label>Mysterious symbols... find out!</Label>
                </Riddles.LeftSection>

                <Riddles.StyledImage src={RiddleFour_icon} alt="Decorative icon" />
        </Riddles.Container>

        {dots}
        </Riddles.Wrapper>
     );
}

export default RiddleFour;