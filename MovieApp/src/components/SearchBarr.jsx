import { useEffect, useState } from "react";
import { getSearch } from "../services/getSearch";
import React from "react";
import styled from "styled-components";
import { Link, generatePath } from "react-router-dom";
import { routes } from "../config/routes";
import useAutocomplete from "@mui/material/useAutocomplete";
import search from "../assets/searchicon.png";
import { Text } from "./Text";

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
`;

const Search = styled.form`
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
const SearchList = styled.div`
  background: ${(props) => props.theme.colorpalette["primary-dark"]};
  max-height: 500px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
`;

const Suggestion = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background: ${(props) => props.theme.colorpalette["secondary-dark"]};
  }
`;
const Img = styled.img`
  height: 70px;
  width: auto;
  border-radius: 10px;
  margin: 10px 20px 10px 20px;
`;

export const SearchBarr = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSearch(input);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [input]);

  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: data,
    getOptionLabel: (option) => option.title || option.name,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      alert('Please enter a search term');
    } else {
      setInput('');
    }
  };

  const handleLinkClick = () => {
    setInput('');
  };

  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <Input
          placeholder='Search...'
          type='text'
          {...getInputProps()}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Icon src={search} />
      </Search>
      <SearchList {...getListboxProps()}>
        {groupedOptions.slice(0, 5).map((option, index) => (
          option.poster_path && (
            <Link
              to={generatePath(routes.moreinfo, {
                type: option.media_type === 'movie' ? 'movie' : 'tv',
                id: option.id,
              })}
              onClick={handleLinkClick}
              key={option.id}
              style={{ textDecoration: 'none' }}
            >
              <Suggestion {...getOptionProps({ option, index })}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${option.poster_path}`}
                />
                <Text
                  variant='small'
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                >
                  {option.title || option.name}
                </Text>
              </Suggestion>
            </Link>
          )
        ))}
      </SearchList>
    </Container>
  );
};