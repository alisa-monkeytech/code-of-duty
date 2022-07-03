import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 64px;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 44px;
    font-weight: 900;
    line-height: 68px;
    color: #2A2E0A;
`;

export const Button = styled.button`
    background: none;
    border: 2px solid ${({isSelected}) => isSelected ? '#32CC9A' : 'transparent'};
    border-radius: 21px;

    padding: 0 24px;

    color: ${({color}) => color};
    font-size: 44px;
    font-weight: 900;
    line-height: 68px;

    :hover {
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
    }
`;