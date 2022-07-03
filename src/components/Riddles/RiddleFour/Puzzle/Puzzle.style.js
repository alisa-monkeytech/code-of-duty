import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 27px;
    row-gap: 54px;

    margin-top: 55px;
    margin-bottom: 40px;
    width: fit-content;
`;

export const Button = styled.button`
    background: #1C1C1C;
    border: 1px solid ${({isSelected}) => isSelected ? '#32CC9A' : 'transparent'};
    border-radius: 8px;

    width: 118px;
    height: 118px;

    :hover {
        box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.2);
    }
`;