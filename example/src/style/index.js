import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Nav = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 139,0.03);
    position: absolute;
    top:0;
    span {
        display: flex;
        align-items: center;
        div{
            margin-right: 10px;
        }
    }
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
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border: 0;
    border-radius: 100%;
    margin: 30px;
    transition: .3s opacity;
    &:hover{
        opacity: .5;
        cursor: pointer;
    }
`

export const DateIndicator = styled.span`
    position: fixed; 
    bottom: 10vh;
    opacity: 0;
    ${props=>props.isVisible ? `
        transform: translateY(-10vh);
        opacity: 1;
    `: null}
    transition: all .5s, background 0s, outline 0s, color 0s;
    border-radius: 17px;
    color: darkblue;
    font-size: 16px;
    font-family: 'Poppins';
    padding: 10px 20px;
    background: rgba(0, 0, 139,0.03);
`