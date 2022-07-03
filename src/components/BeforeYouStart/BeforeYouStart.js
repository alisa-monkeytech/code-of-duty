import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Main, Overlay, Paragraph, Subtitle, Title } from './BeforeYouStart.style';

const subtitleText = `YOU SHOULD KNOW THAT. . .\nIt’s time for the big journey!`

function BeforeYouStart() {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/riddles');
    }

    return ( 
        <Main>
            <Overlay>
                <Title>BEFORE YOU START</Title>
                <Subtitle>{subtitleText}</Subtitle>
                <Paragraph>
                Arun Owondo is a scavenger, though not by choice and not for long. A band of reclusive Hillfolk have imprisoned him for wearing their prized possession: a pair of gloves that can wield cosmic dark energy.
                </Paragraph>

                <Button onClick={onClickHandler}>
                    I AGREE
                </Button>
            </Overlay>
        </Main>
     );
}

export default BeforeYouStart;