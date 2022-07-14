import styled from "styled-components";
import React from "react";

export default props => {
  return <Switch backgroundColor={props.styled.backgroundColor}>
        <input {...props} type="checkbox" />
        <Slider backgroundColor={props.styled.backgroundColor} borderColor={props.styled.borderColor}/>
    </Switch>
}

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${props=>props.borderColor || 'black'};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    :before {
        border-radius: 50%;
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 5px;
        bottom: 5px;
        background-color: ${props=>props.backgroundColor || 'black'};
        -webkit-transition: .4s;
        transition: .4s;
    }
`
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider} {
    :before{
      background-color: ${props=>props.backgroundColor || 'white'};
    }
  }
  
  input:checked + ${Slider}:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
  }
`