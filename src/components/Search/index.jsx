import React from "react";
import styled from "styled-components";
import searchIcon from "./search-icon.png";

const SearchForm = styled.form`
  width: 100%;
  margin: 0 0 15px;
  justify-content: center;
  display: flex;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 12px 30px;
  background-color: #E8E8E8;
  border: 1.7px solid #888888;
  border-radius: 20px;
  color: #888888;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`
const SubmitButton = styled.button`
  width: 18px;
  height: 18px;
  position:absolute;
  bottom:5px;
  left: 10px;
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`
const Icon = styled.img`
    width: 18px;
    height: 18px;
`

const Search = ({ formOnSubmit, inputOnChange }) => (
  <SearchForm onSubmit={(e) => formOnSubmit(e)}>
    <Input type='text' onChange={(e) => inputOnChange(e)} />
    <SubmitButton type="submit"><Icon src={searchIcon} /></SubmitButton>
  </SearchForm>
);
export default Search;