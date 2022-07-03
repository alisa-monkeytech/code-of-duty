import styled from "styled-components"

export const Main = styled.main`
    background-color: #2A2E0A;
`;

export const StyledImage = styled.img`
    width: 100vw;
`;

export const Content = styled.section`
    padding: 20px 150px 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const Paragraph = styled.p`
    color: #FED707;
    font-weight: 900;
    font-size: 36px;
    line-height: 56px;
    text-align: center;

    cursor: default;
`;

export const Button = styled.button`
    border: none;
    border-radius: 30px;

    padding: 5px 33px 10px;
    background-color: #32CC9A;
    margin-top: 30px;

    color: #2A2E0A;
    font-weight: 900;
    font-size: 30px;
    line-height: 46px;
`;