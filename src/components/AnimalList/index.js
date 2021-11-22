import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  const [value, setValue] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    setFilteredAnimals(data?.animals?.edges);
  }, [data]);

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <div className={styles.container}>
          <TextField
            value={value}
            placeholder={"Search"}
            onChange={(e) => {
              setValue(e.target.value);
              setFilteredAnimals(filterAnimals(e.target.value));
            }}
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: value && (
                <CloseIcon
                  onClick={() => {
                    setValue("");
                    setFilteredAnimals(filterAnimals(""));
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
            {filteredAnimals?.map((animal) => (
              <Link key={animal.node.id} to={`animal/${animal.node.id}`}>
                <Card sx={{ width: 300 }} className={styles.cardContainer}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
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
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );

  function filterAnimals(value) {
    return data?.animals?.edges.filter((animal) =>
      animal.node.name.toLowerCase().includes(value.toLowerCase())
    );
  }
};

export default AnimalList;
