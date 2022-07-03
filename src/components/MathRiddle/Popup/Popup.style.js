import styled from "styled-components";

export const ShadowOverlay = styled.div`
  background-color: #0e0327b3;

  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;

  display: flex;
`;

export const Modal = styled.div`
  width: 420px;
  height: 238px;
  padding: 24px 24px 21px;
  margin: auto;

  background-color: #ffffff;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.big`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: "Circular-Loom";
  color: #222429;
`;

export const ExitButton = styled.button`
  border: none;
  background: none;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #222429;
  font-family: "Circular-Loom";

  margin-top: 21px;
`;

export const StartButton = styled.button`
    border: none;
    border-radius: 8px;

    display: flex;
    align-self: end;

    background-color: #32CC9A;
    padding: 8px 14px;

    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    color: #ffffff;
  font-family: "Circular-Loom";
`