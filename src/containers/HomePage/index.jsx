import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { GET_COUNTRIES, GET_COUNTRIES_BY_CONTINENT } from "../../graphql/queries";
import { groupCountriesByLanguage, filterGroupedCountries } from "../../graphql/dataManipulation";
import Header from "./Header";
import Search from "../../components/Search"
import GroupsBy from "./GroupBy"
import Button from "../../components/Button"
import Groups from "./Groups"

const Home = styled.div`
  min-height: 100%;
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 481px) {
    width: 80%;
    padding: 0 20px;
  }
  @media (min-width: 769px) {
    width: 769px;
    padding: 0 30px;
  } 
`

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [groupByContinent, setGroupByContinent] = useState(true);
  const [groupByLanguage, setGroupByLanguage] = useState(false);
  const { data: { continents } = {} } = useQuery(GET_COUNTRIES_BY_CONTINENT);
  const { data: { countries } = {} } = useQuery(GET_COUNTRIES);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setLanguages(groupCountriesByLanguage(countries));
  }, [countries]);

  useEffect(() => {
    if (typeof continents !== "undefined") {
      if (submitSearch === "") {
        setFiltered(groupByContinent ? continents : languages);
      } else {
        setFiltered(
          filterGroupedCountries(
            groupByContinent ? continents : languages,
            submitSearch
          )
        );
      }
    }
  }, [groupByContinent, submitSearch, continents, languages]);

  function formOnSubmit(event) {
    event.preventDefault();
    setSubmitSearch(search);
  }
  function inputOnChange(event) {
    setSearch(event.target.value);
  }
  function buttonOnClick() {
    setGroupByContinent(!groupByContinent);
    setGroupByLanguage(!groupByLanguage);
  }

  return (
    <Home>
      <Header />
      <Search formOnSubmit={formOnSubmit} inputOnChange={inputOnChange} />
      <GroupsBy>
        <Button buttonOnClick={buttonOnClick} active={groupByContinent}>
          Continent
        </Button>
        <Button buttonOnClick={buttonOnClick} active={groupByLanguage}>
          Language
        </Button>
      </GroupsBy>
      <Groups filtered={filtered} />
    </Home>
  );
};
export default HomePage;