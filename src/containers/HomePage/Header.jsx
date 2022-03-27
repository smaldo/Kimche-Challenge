import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  align-items: center;
  @media (min-width: 481px) {
    align-items: start;
  }
`
const TitleText = styled.div`
  font-size: 35px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #3A3A3A;
`
const SmallText = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #8D8D8D;
`

const Header = () => (
  <HeaderContainer>
    <TitleText>Country Search</TitleText>
    <SmallText>Information about countries, continents, and languages.</SmallText>
  </HeaderContainer>
);
export default Header;