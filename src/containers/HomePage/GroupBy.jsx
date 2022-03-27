import React from "react";
import styled from "styled-components";

const GroupContainer = styled.form`
  width: 100%;
  margin: 0 0 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (min-width: 481px) {
    justify-content: space-between;
    margin: 0 0 20px;
  }
  @media (min-width: 769px) {
    margin: 0 0 30px;
  } 
`
const TitleText = styled.div`
  margin: 10px 10px 15px 0;
  font-size: 25px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #3A3A3A;
`

const Groups = (props) => (
  <GroupContainer>
    <TitleText>Group By:</TitleText>
    {props.children}
  </GroupContainer>
);
export default Groups;