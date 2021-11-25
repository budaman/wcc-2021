import { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Search = ({ onSearch, searchValue }) => {
  return (
    <TextField
      value={searchValue}
      placeholder={"Search"}
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: <SearchIcon />,
        endAdornment: searchValue && (
          <CloseIcon
            onClick={() => {
              onSearch("");
            }}
          />
        ),
      }}
      margin="normal"
      sx={{
        width: "80%",
        margin: "15px 40px",
      }}
    />
  );
};

export default Search;
