import React from "react";
import {
  ExitButton,
  Header,
  Modal,
  Paragraph,
  ShadowOverlay,
  StartButton,
  Title,
} from "./Popup.style";
import Exit_icon from "../../../assets/images/Exit_icon.svg";
import { useNavigate } from "react-router-dom";

function Popup({closePopup}) {
    const navigate = useNavigate();

    const redirectToRiddles = () => {
        navigate('/riddles');
    }

  return (
    <ShadowOverlay>
      <Modal>
        <Header>
          <Title>Something went wrong</Title>
          <ExitButton onClick={closePopup}>
            <img src={Exit_icon} alt="Exit icon" />
          </ExitButton>
        </Header>

        <Paragraph>
          We just want to let you know that it was a joke. Now you can start
          your real adventure. Wish you good luck. Please contact us if you have
          any question.
        </Paragraph>

        <StartButton onClick={redirectToRiddles}>Let's start</StartButton>
      </Modal>
    </ShadowOverlay>
  );
}

export default Popup;
