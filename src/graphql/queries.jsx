import { gql } from "apollo-boost";

export const GET_COUNTRIES = gql`
query {
    countries {
        name
        capital
        currency
        phone
        emojiU
        languages {
            name
        }
    }
}
`;

export const GET_COUNTRIES_BY_CONTINENT = gql`
query {
    continents {
        code
        name
        countries {
            name
            capital
            currency
            phone
            emojiU
            languages {
                name
            }
        }
    }
}
`;