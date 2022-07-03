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
                You can move between different stages and must think outside of the box ;)
                </Paragraph>

                <Button onClick={onClickHandler}>
                    I AGREE
                </Button>
            </Overlay>
        </Main>
     );
}

export default BeforeYouStart;