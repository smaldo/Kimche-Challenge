import { gql } from "apollo-boost";

export const GET_COUNTRIES = gql`
query {
    countries {
        code
        name
        capital
        currency
        phone
        emojiU
        languages {
            code
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
            code
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