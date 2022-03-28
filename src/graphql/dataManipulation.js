import clone from "lodash/clone";
import omit from "lodash/omit";
import startsWith from "lodash/startsWith";
import orderBy from "lodash/orderBy";

export const groupCountriesByLanguage = (countries) => {
    const languages = [];
    const languagesIndex = {};
    if (typeof countries !== "undefined") {
        countries.forEach((country) => {
            const countryInfo = omit(country, ["languages"]);
            country.languages.forEach((language) => {
                if (language.code in languagesIndex) {
                    languages[languagesIndex[language.code]]["countries"].push(
                        countryInfo
                    );
                } else {
                    const languageInfo = clone(language);
                    languageInfo["countries"] = [countryInfo];
                    languages.push(languageInfo);
                    languagesIndex[language.code] = languages.length - 1;
                }
            });
        });
        
    }
    return orderBy(languages, ['name'],['asc']);
};
export const filterGroupedCountries = (groups, search) => {
    const filtered = [];
    if (typeof groups !== "undefined") {
        groups.forEach((group) => {
            const countries = group.countries.filter((country) => {
                return startsWith(country.name, search);
            });
            if (countries.length > 0) {
                const elementFiltered = omit(group, ["countries"]);
                elementFiltered["countries"] = countries;
                filtered.push(elementFiltered);
            }
        });
    }
    return filtered;
};