import React from "react";
import Box from "../../components/Box";
import styled from "styled-components";

const AllGroupsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const GroupsContainer = styled.div`
  margin: 0 0 50px;
`
const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 30px 30px; 
    grid-template-areas: 
      ". .";
  }
`
const GroupName = styled.div`
  height: 40px;
  margin: 0px 0px 15px;
  font-size: 25px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #3A3A3A;
`
const CountryName = styled.div`
  margin: 0 0 5px;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #3A3A3A;
`
const DataContainer = styled.div`
  display: flex;
  gap: 10px;
`
const SmallTextBold = styled.div`
  width: 80px;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #3A3A3A;
`
const SmallText = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #8D8D8D;
`

const Groups = ({ filtered }) => {
  return <AllGroupsContainer>
    {filtered === [] ? (
      <h1>Countries not found</h1>
    ) : (
      filtered.map((group) =>
        <GroupsContainer key={group.code}>
          <GroupName>{group.name}</GroupName>
          <Grid>
            {group.countries.map((country) =>
              <Box key={country.code}>
                <CountryName >{country.emoji} {country.name}</CountryName>
                <DataContainer>
                  <SmallTextBold>Capital: </SmallTextBold>
                  <SmallText>{country.capital}</SmallText>
                </DataContainer>
                {
                  country.continent ? (
                    <DataContainer>
                      <SmallTextBold>Continent: </SmallTextBold>
                      <SmallText>{country.continent.name}</SmallText>
                    </DataContainer>
                  ) : (
                    <DataContainer>
                      <SmallTextBold>Languages: </SmallTextBold>
                      <SmallText>
                        {country.languages.map(({ name }) => name).join(", ")}
                      </SmallText>
                    </DataContainer>
                  )
                }
                <DataContainer>
                  <SmallTextBold>Currency: </SmallTextBold>
                  <SmallText>{country.currency}</SmallText>
                </DataContainer>
                <DataContainer>
                  <SmallTextBold>Phone: </SmallTextBold>
                  <SmallText>+{country.phone}</SmallText>
                </DataContainer>
              </Box>
            )}
          </Grid>
        </GroupsContainer>
      )
    )}
  </AllGroupsContainer >
};

export default Groups;