import { useState } from "react";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";

import {
  LinearProgress,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./styles.module.css";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");
const DEFAULT_ANIMAL_IMAGE =
  "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7";

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
          <Link key={animal.node.id} to={`animal/${animal.node.id}`}>
            <Card sx={{ width: 300 }} className={styles.cardContainer}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={animal.node.imageUrl || DEFAULT_ANIMAL_IMAGE}
              />
              <CardContent>
                <p>{animal.node.name}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
