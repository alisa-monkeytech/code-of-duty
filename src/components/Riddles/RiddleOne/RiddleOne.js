import React, { useEffect, useState } from 'react';
import { MoresCodeImg } from './RiddleOne.style';
import RiddleOne_icon from '../../../assets/images/RiddleOne_icon.svg';

import RiddleOneMores_icon from '../../../assets/images/RiddleOneMores_icon.svg';
import Question from '../Question/Question';
import GoodJob from '../GoodJob/GoodJob';
import Riddles from '../Riddles';

const hiddenSolution = 'mayatech';

function RiddleOne() {
    const [showInput, setShowInput] = useState(true);
    const [currentSolution, setCurrentSolution] = useState('');

    useEffect(() => {
        console.log(currentSolution)

        if (currentSolution.toLowerCase() === hiddenSolution) {
            setShowInput(false);
        }
    }, [currentSolution]);

    return ( 
        <Riddles.Container background='#0E0327'>
            <Riddles.LeftSection>
                <Riddles.Title color='#DF229D'>Kukulkan</Riddles.Title>

                <Riddles.Subtitle>Solve the Morse code</Riddles.Subtitle>

                <MoresCodeImg src={RiddleOneMores_icon} alt="Mores code" />

                {showInput && <Question setCurrentSolution={setCurrentSolution} inputLength={8}/>}
                {!showInput && <GoodJob color='#DF229D' code='54875'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleOne_icon} alt="Decorative icon" />
        </Riddles.Container>
     );
}

export default RiddleOne;