import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRIES, GET_COUNTRIES_BY_CONTINENT } from "../../graphql/queries";
import { groupCountriesByLanguage, filterGroupedCountries } from "../../graphql/dataManipulation";
import Search from "../../components/Search"
import GroupsBy from "./GroupBy"
import Button from "../../components/Button"
import Groups from "./Groups"

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
    <div>
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
    </div>
  );
};
export default HomePage;