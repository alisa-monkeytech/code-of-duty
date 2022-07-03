import React from 'react';
import { MoresCodeImg } from './RiddleOne.style';
import RiddleOne_icon from '../../../assets/images/RiddleOne_icon.svg';

import RiddleOneMores_icon from '../../../assets/images/RiddleOneMores_icon.svg';
import Question from '../Question/Question';
import GoodJob from '../GoodJob/GoodJob';
import Riddles from '../Riddles';

function RiddleOne() {
    return ( 
        <Riddles.Container background='#0E0327'>
            <Riddles.LeftSection>
                <Riddles.Title color='#DF229D'>Kukulkan</Riddles.Title>

                <Riddles.Subtitle>Solve the Mores code</Riddles.Subtitle>

                <MoresCodeImg src={RiddleOneMores_icon} alt="Mores code" />

                {false && <Question inputLength={8}/>}
                {true && <GoodJob color='#DF229D' code='8940393'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleOne_icon} alt="Decorative icon" />
        </Riddles.Container>
     );
}

export default RiddleOne;