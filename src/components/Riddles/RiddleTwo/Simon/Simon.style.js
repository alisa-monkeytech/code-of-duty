import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    
    width: 258px;
    height: 258px;
    margin-top: 50px;
    margin-left: 60px;
    margin-bottom: 50px;
    
    transform: rotate(45deg);
`;

export const BlueButton = styled.button`
    border: none;
    border-radius: 20px;
    background-color: #1E979680;

    width: 118px;
    height: 118px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 20px;

    background-color: ${({background}) => background};
    width: 38px;
    height: 38px;
`;