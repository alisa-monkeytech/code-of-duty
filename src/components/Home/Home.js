import React from "react";
import HomeBackground_icon from "../../assets/images/HomeBackground_icon.svg";
import HomeTitle from "../../assets/images/HomeTitle_icon.svg";
import { Button, Content, Main, Paragraph, StyledImage } from "./Home.style";

function Home() {
  return (
    <Main>
      <StyledImage src={HomeBackground_icon} alt="Decorative img" />

      <Content>
        <img src={HomeTitle} alt="Our Story"/>

        <Paragraph>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Paragraph>

        <Button>Start here</Button>
      </Content>
    </Main>
  );
}

export default Home;
