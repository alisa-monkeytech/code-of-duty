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
          2000 years since the last sunrise, a symbol of hope resurfaces in the
          vast wastelands of Earth.
        </Paragraph>

        <Paragraph>
          Arun Owondo is a scavenger, though not by choice and not for long. A
          band of reclusive Hillfolk have imprisoned him for wearing their
          prized possession: a pair of gloves that can wield cosmic dark energy.
        </Paragraph>

        <Paragraph>
          If Arun is innocent, they’ll need his help. The Hillfolk must embark
          on finding a lost companion and overthrowing the self-proclaimed God
          who destroyed the world, leaving it shrouded, frozen in a timeless
          time.
        </Paragraph>

        <Paragraph>But whilst their bodies begin one journey...</Paragraph>

        <Button onClick={onClickHandler}>Start your journey</Button>
      </Content>
    </Main>
  );
}

export default Home;
