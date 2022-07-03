import React, { useState, useEffect } from 'react';
import Riddles from '../Riddles';
import RiddleThreePuzzle_icon from '../../../assets/images/RiddleThreePuzzle_icon.svg';
import Question from '../Question/Question';
import GoodJob from '../GoodJob/GoodJob';
import RiddleThree_icon from '../../../assets/images/RiddleThree_icon.svg';
import { PuzzleImg } from './RiddleThree.style';

const hiddenSolution = 'banana';

function RiddleThree({dots}) {
    const [showInput, setShowInput] = useState(true);
    const [currentSolution, setCurrentSolution] = useState('');

    useEffect(() => {
        if (currentSolution.toLowerCase() === hiddenSolution) {
            setShowInput(false);
        }
    }, [currentSolution]);

    return ( 
        <Riddles.Wrapper background='#160D0B'>
        <Riddles.Container background='#160D0B'>
            <Riddles.LeftSection>
                <Riddles.Title color='#EC2001'>Kinich Ahau</Riddles.Title>

                <Riddles.Subtitle>Solve the Puzzle</Riddles.Subtitle>

                <PuzzleImg src={RiddleThreePuzzle_icon} alt='Puzzle' />

                {showInput && <Question inputLength={6} setCurrentSolution={setCurrentSolution}/>}
                {!showInput && <GoodJob color='#FED707' code='83753'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleThree_icon} alt="Decorative icon"/>

        </Riddles.Container>
        {dots}
        </Riddles.Wrapper>
     );
}

export default RiddleThree;