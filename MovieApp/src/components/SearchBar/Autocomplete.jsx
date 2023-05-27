import useAutocomplete from "@mui/base/useAutocomplete";
import styled from "styled-components";
import search from "../../assets/searchicon.png";
import { Text } from "../Text";
import React from "react";

const Container = styled.div`
  border-radius: 20px;
  border: solid 5px ${(props) => props.theme.colorpalette["primary-dark"]};
  background-color: ${(props) => props.theme.colorpalette["primary-light"]};
  max-width: 700px;
  height: 48px;
  width: 100%;
  margin: 20px 20px 20px 20px;
  position: relative;
  z-index: 100;

  &:focus-within {
    border-color: ${(props) => props.theme.colorpalette["accent-light"]};
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  text-decoration: none;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colorpalette["primary-light"]};
  width: 80%;
  height: 38px;
  margin: 0 15px 0 15px;
  font-size: ${(props) => props.theme.fontsize["medium"]};
`;

const Icon = styled.img`
  height: 30px;
  width: auto;
`;

const SearchList = styled.ul`
  background: ${(props) => props.theme.colorpalette["primary-dark"]};
  max-height: 500px;
  border-radius: 10px;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
  }

  & li.Mui-focused {
    background-color: ${(props) => props.theme.colorpalette["secondary-dark"]};
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 70px;
  width: auto;
  border-radius: 10px;
  margin: 10px 20px 10px 20px;
`;

export const Autocomplete = ({
  options,
  onInputChange,
  label,
  equalToValue,
  onChange,
  value,
}) => {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options,
    getOptionLabel: label,
    isOptionEqualToValue: equalToValue,
    onInputChange,
    onChange,
  });

  return (
    <Container>
      <Search {...getRootProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search..."
          type="text"
          value={value}
        />
        <Icon src={search} />
      </Search>
      {groupedOptions.length > 0 ? (
        <SearchList {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={option.id}>
              <Img src={`https://image.tmdb.org/t/p/w500/${option.poster}`} />
              <Text
                variant="small"
                style={{ textOverflow: "ellipsis", overflow: "hidden" }}
              >
                {option.title || option.name}
              </Text>
            </li>
          ))}
        </SearchList>
      ) : null}
    </Container>
  );
};
