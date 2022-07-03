import React from 'react';
import { DotsContainer, Main } from './LastStep.style';


function LastStep({dots}) {

    return ( 
        <Main>
            <DotsContainer>
            {dots}
            </DotsContainer>
        </Main>
     );
}

export default LastStep;