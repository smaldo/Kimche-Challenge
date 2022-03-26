import React from "react";
import Box from "../../components/Box";

const Groups = ({filtered}) => (
    <div>
        {filtered === [] ? (
            <h1>Loading posts..</h1>
        ) : (
            filtered.map((group) => {
                return (
                    <div key={group.code}>
                        <h1>{group.name}</h1>
                        {group.countries.map((country) => {
                            return (
                                <Box>
                                    <h2 key={country.code}>{country.name}</h2>
                                </Box>
                            );
                        })}
                    </div>
                );
            })
        )}
    </div>
);
export default Groups;