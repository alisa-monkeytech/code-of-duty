import React from 'react';
import Riddles from '../Riddles';
import RiddleThreePuzzle_icon from '../../../assets/images/RiddleThreePuzzle_icon.svg';
import Question from '../Question/Question';
import GoodJob from '../GoodJob/GoodJob';
import RiddleThree_icon from '../../../assets/images/RiddleThree_icon.svg';
import { PuzzleImg } from './RiddleThree.style';

function RiddleThree() {
    return ( 
        <Riddles.Container background='#160D0B'>
            <Riddles.LeftSection>
                <Riddles.Title color='#EC2001'>Kinich Ahau</Riddles.Title>

                <Riddles.Subtitle>Solve the Puzzle</Riddles.Subtitle>

                <PuzzleImg src={RiddleThreePuzzle_icon} alt='Puzzle' />

                {true && <Question inputLength={6}/>}
                {false && <GoodJob color='#FED707' code='54875'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleThree_icon} alt="Decorative icon"/>

        </Riddles.Container>
     );
}

export default RiddleThree;