import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 26px;
    font-weight: 900;
    line-height: 36px;
    color: #FED707;
`;


export const InputContainer = styled.div`
  display: flex;
  gap: 20px;

  margin-top: min(24px, 4%);
  margin-bottom: min(22px, 3%);

  z-index: 2;
`;

export const Input = styled.input`
  width: 50px;
  height: 50px;
  background: #ffffff;

  border-radius: 10px;
  border: none;

  font-size: 18px;
  color: #2A2E0A;
  text-align: center;
`;