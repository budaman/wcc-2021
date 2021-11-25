import { useState } from "react";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { LinearProgress, TextField } from "@mui/material";

import AnimalCard from "../AnimalCard";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./styles.module.css";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { data, loading, error } = useQuery(GET_ANIMALS_QUERY);

  const [searchValue, setSearchValue] = useState("");

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  if (loading) {
    return <LinearProgress />;
  }

  const filterAnimals = () => {
    return data?.animals?.edges.filter((animal) =>
      animal.node.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <TextField
        value={searchValue}
        placeholder={"Search"}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: searchValue && (
            <CloseIcon
              onClick={() => {
                setSearchValue("");
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
      <div className={styles.animalContainer}>
        {filterAnimals().map((animal) => (
          <AnimalCard
            id={animal.node.id}
            name={animal.node.name}
            image={animal.node.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
