import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeBackground_icon from "../../assets/images/HomeBackground_icon.svg";
import HomeTitle from "../../assets/images/HomeTitle_icon.svg";
import { Button, Content, Main, Paragraph, StyledImage } from "./Home.style";


const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function Home() {
  const navigate = useNavigate();
  const [playing, toggle] = useAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

  const onClickHandler = () => {
    navigate('/before-you-start');
  }
  
  return (
    <Main>
      <StyledImage src={HomeBackground_icon} alt="Decorative img" />

      <Content>
        <img src={HomeTitle} alt="Our Story" />
        <Paragraph>
        You were on a search in the Amazon jungle
        After a week you have finally found the lost pyramid of the Mayans
        As soon as you entered, the doors locked behind you
        And you heard a terrible voice:
        "Humans! We are the Maya gods, if you want to get out of here you must pass our tests, you have an hour or you will be buried here with us forever"
        7 gods & 7 puzzles
        </Paragraph>

        <Paragraph>
        Will we be able to solve them and escape?

        </Paragraph>


        <Button onClick={onClickHandler}>Start your journey</Button>
      </Content>
    </Main>
  );
}

export default Home;
