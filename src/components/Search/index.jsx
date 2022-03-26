import React from "react";

const Search = ({ formOnSubmit, inputOnChange }) => (
    <form onSubmit={(e) => formOnSubmit(e)}>
        <input type='text' onChange={(e) => inputOnChange(e)} />
    </form>
);
export default Search;