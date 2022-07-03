import React from 'react';
import { Container, Dot } from './Dots.style';

function Dots({currentRiddle, setCurrentRiddle, riddles}) {
    return ( 
        <Container>
            {riddles.map((_, index) => (<Dot key={index} isCurrentRiddle={currentRiddle === index} onClick={() => setCurrentRiddle(index)}/>))}
        </Container>
     );
}

export default Dots;