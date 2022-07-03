import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 26px;
  font-weight: 900;
  line-height: 36px;
  color: #fed707;
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
  color: #2a2e0a;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  background-color: #32cc9a;

  padding: 8px 18px;
  width: 239px;

  font-size: 24px;
  font-weight: 900;
  line-height: 37px;
  color: #2a2e0a;

  z-index: 2;
`;

