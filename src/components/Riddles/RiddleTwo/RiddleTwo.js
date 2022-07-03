import React, { useEffect, useState } from 'react';
import Riddles from '../Riddles';
import RiddleTwo_icon from '../../../assets/images/RiddleTwo_icon.svg';
import Simon from './Simon/Simon';
import { Label } from './RiddleTwo.style';
import GoodJob from '../GoodJob/GoodJob';

const hiddenSolution = 'URUDLLUDRL';

function RiddleTwo({dots}) {
    const [showInput, setShowInput] = useState(true);
    const [currentSolution, setCurrentSolution] = useState('');
    const [buttonsCombination, setButtonsCombination] = useState('');


    useEffect(() => {
        if(!showInput) return
        console.log(buttonsCombination)
        if(buttonsCombination === hiddenSolution){
            setShowInput(false)
            return
        }
        if(!hiddenSolution.startsWith(buttonsCombination)){
            setButtonsCombination("")
            alert("wrong!")

        }

    }, [buttonsCombination]);

    const onButtonClick = (p) => {
        const map = {
            top: "U",
            left: "D",
            right: "R",
            bottom: "L"
        }
        setButtonsCombination(buttonsCombination + map[p])
    }

    return ( 
        <Riddles.Wrapper background='#011F20'>
        <Riddles.Container background='#011F20'>
            <Riddles.LeftSection>
                <Riddles.Title color='#FEA614'>Ek Chuaj</Riddles.Title>

                <Simon  onButtonClick={onButtonClick}/>

                {showInput && <Label>Simon says... find out!</Label>}
                {!showInput && <GoodJob color='#32CC9A'  code='54875'/>}
            </Riddles.LeftSection>

            <Riddles.StyledImage src={RiddleTwo_icon} alt='Decorative icon'/>

        </Riddles.Container>

        {dots}
        </Riddles.Wrapper>
     );
}

export default RiddleTwo;