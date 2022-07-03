import React from 'react';
import Riddles from '../Riddles';
import RiddleTwo_icon from '../../../assets/images/RiddleTwo_icon.svg';
import Simon from './Simon/Simon';
import { Label } from './RiddleTwo.style';

function RiddleTwo() {
    return ( 
        <Riddles.Container background='#011F20'>
            <Riddles.LeftSection>
                <Riddles.Title color='#FEA614'>Ek Chuaj</Riddles.Title>

                <Simon />

                <Label>Simon says... find out!</Label>
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleTwo_icon} alt='Decorative icon'/>

        </Riddles.Container>
     );
}

export default RiddleTwo;