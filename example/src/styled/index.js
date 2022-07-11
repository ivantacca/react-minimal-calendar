import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    margin: 40px;
`

export const ArrowButton = styled.button`
    flex: 0 0 45px;
    background-color: rgba(0, 0, 139,0.03);
    color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border: 0;
    border-radius: 100%;
    margin: 10px;
    transition-duration: .3s;
    &:hover{
        opacity: .5;
        cursor: pointer;
    }
`

export const DateIndicator = styled.span`
    margin-top: 40px;
    border-radius: 17px;
    color: darkblue;
    font-size: 14px;
    font-family: 'Poppins';
    padding: 10px 20px;
    background-color: rgba(0, 0, 139,0.03);
`