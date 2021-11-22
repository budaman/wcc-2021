import { useState } from "react";

import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

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

const AnimalList = () => {
  const { data, loading, error } = useQuery(GET_ANIMALS_QUERY);

  const [value, setValue] = useState("");

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  if (loading) {
    return <LinearProgress />;
  }

  const filterAnimals = () => {
    return data?.animals?.edges.filter((animal) =>
      animal.node.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <TextField
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Search"}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: value && (
            <CloseIcon
              onClick={() => {
                setValue("");
              }}
            />
          ),
        }}
        sx={{
          width: "80%",
          margin: "15px 40px",
        }}
      />
      <div className={styles.animalContainer}>
        {filterAnimals().map((animal) => (
          <Card key={animal.node.id} className={styles.cardContainer}>
            <CardMedia
              component="img"
              alt={animal.node.name}
              height="140"
              image={
                animal.node.imageUrl ||
                "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7"
              }
            />
            <CardContent>
              <p>{animal.node.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
