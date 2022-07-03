import styled from "styled-components";

export const Main = styled.main`
    height: 100%;
`;

export const UpperImage = styled.img`
    position: absolute;
    top: 0;

    width: 100%;
    opacity: 0.1;
`;

export const LowerImage = styled.img`
    position: absolute;
    bottom: 0;

    opacity: 0.1;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 100%;
    padding: 60px 134px 0;
    background-color: ${({background}) => background};
`;

export const StyledImage = styled.img`
    height: 100%;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 900;
    line-height: 96px;
    color: ${({color}) => color};
    font-family: 'Mama Kilo Decorated';

    margin: 0;
`;

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: 900;
    line-height: 36px;
    color:  #FFFFFF;
`;