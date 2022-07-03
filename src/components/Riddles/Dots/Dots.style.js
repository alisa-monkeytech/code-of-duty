import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 23px;
    justify-content: center;

    padding-bottom: 20px;
`;

export const Dot = styled.button`
    background-color: ${({isCurrentRiddle}) => isCurrentRiddle ? 'transparent' : '#ffffff'};
    border: 4px solid #ffffff;
    border-radius: 20px;

    width: 16px;
    height: 16px;
    padding: 0;
`;