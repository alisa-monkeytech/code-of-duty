import styled from "styled-components"
import BeforeYouStartBackground_icon from '../../assets/images/BeforeYouStartBackground_icon.svg';

export const Main = styled.main`
    background-image: url(${BeforeYouStartBackground_icon});
    background-position: center;
    background-size: cover;

    height: 100%;
`

export const Overlay = styled.section`
    height: 100%;
    padding-top: 54px;
    background-color: #000000D9;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Mama Kilo Decorated';
    font-size: 100px;
    font-weight: 900;
    line-height: 100px;
    color: #FED707;

    margin: 0;
    margin-bottom: 36px;
`;

export const Subtitle = styled.h2`
    font-size: 60px;
    font-weight: 900;
    line-height: 70px;
    color: #ffffff;
    text-align: center;
    white-space: pre-wrap;

    margin: 0;
    margin-bottom: 50px;
`;

export const Paragraph = styled.p`
    font-size: 32px;
    font-weight: 900;
    line-height: 50px;
    color: #FED707;
    text-align: center;

    padding: 0px 180px;
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