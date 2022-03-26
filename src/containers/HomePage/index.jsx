import React, { useState, useEffect } from "react";

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
      <form onSubmit={(e) => formOnSubmit(e)}>
        <input type='text' onChange={(e) => inputOnChange(e)} />
      </form>
      <button onClick={() => buttonOnClick()} disabled={groupByContinent}>
        Continent
      </button>
      <button onClick={() => buttonOnClick()} disabled={groupByLanguage}>
        Language
      </button>
      {filtered === [] ? (
        <h1>Loading posts..</h1>
      ) : (
        filtered.map((group) => {
          return (
            <div key={group.code}>
              <h1>{group.name}</h1>
              {group.countries.map((country) => {
                return (
                  <h2 key={country.code}>{country.name}</h2>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};
export default HomePage;