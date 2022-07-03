import React from 'react';
import Riddles from '../Riddles';
import RiddleTwo_icon from '../../../assets/images/RiddleTwo_icon.svg';
import Simon from './Simon/Simon';
import { Label } from './RiddleTwo.style';
import GoodJob from '../GoodJob/GoodJob';

function RiddleTwo() {
    return ( 
        <Riddles.Container background='#011F20'>
            <Riddles.LeftSection>
                <Riddles.Title color='#FEA614'>Ek Chuaj</Riddles.Title>

                <Simon />

                {false && <Label>Simon says... find out!</Label>}
                {true && <GoodJob color='#32CC9A'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleTwo_icon} alt='Decorative icon'/>

        </Riddles.Container>
     );
}

export default RiddleTwo;