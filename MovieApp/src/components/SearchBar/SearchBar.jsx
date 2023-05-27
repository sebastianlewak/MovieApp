import { useState } from "react";
import { Autocomplete } from "./Autocomplete";
import { getSearch } from "../../services/getSearch";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const options = data.map((item) => {
    return {
      id: item.id,
      poster: item.poster_path,
      title: item.title,
      name: item.name,
      type: item.media_type,
    };
  });

  const equalToValue = (option, value) => option.id === value.id;

  const onInputChange = (event, value) => {
    getSearch(value).then((response) => setData(response));
    setValue(value);
  };

  let label = (option) => `${option.title || option.name}`;

  const onChange = (value, option) => {
    navigate(`/${option.type}/${option.id}`);
    setValue("");
  };

  return (
    <Autocomplete
      options={options}
      onInputChange={onInputChange}
      onChange={onChange}
      label={label}
      equalToValue={equalToValue}
      value={value}
    />
  );
};
