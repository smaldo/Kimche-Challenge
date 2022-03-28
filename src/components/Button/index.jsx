import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100px;
  height: 35px;
  margin: 0 3px;
  overflow-x: hidden;
  background-color: ${props => (props.disabled ? `#0080FF` : `#E8E8E8`)};
  border: 1.7px solid #888888;
  border-radius: 8px;
  box-shadow: inset 0 -8px 1px -6px #888888;
  color: ${props => (props.disabled ? `white` : `#3A3A3A`)};
  font-weight: 700;
  @media (min-width: 481px) {
    width: 150px;
  }
  @media (min-width: 769px) {
    width: 200px;
  }

`

const Button = ({ children, buttonOnClick, active }) => (
    <ButtonContainer onClick={() => buttonOnClick()} disabled={active}>
        {children}
    </ButtonContainer>
);
export default Button;