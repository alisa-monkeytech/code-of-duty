import React from 'react';
import Riddles from '../Riddles';
import Puzzle from './Puzzle/Puzzle';
import { Label } from './RiddleFour.style';
import RiddleFour_icon from '../../../assets/images/RiddleFour_icon.svg';

function RiddleFour() {
    return ( 
        <Riddles.Container background='#222821'>
                <Riddles.LeftSection>
                    <Riddles.Title color='#FEA614'>Yum Kaax</Riddles.Title>

                    <Puzzle />

                    <Label>Mysterious symbols... find out!</Label>
                </Riddles.LeftSection>

                <Riddles.StyledImage src={RiddleFour_icon} alt="Decorative icon" />
        </Riddles.Container>
     );
}

export default RiddleFour;