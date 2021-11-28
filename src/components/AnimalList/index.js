import { useState } from "react";
import { useQuery } from "@apollo/client";

import { LinearProgress } from "@mui/material";

import AnimalCard from "../AnimalCard";
import Search from "../Search";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import { GET_ANIMALS_QUERY } from "../../graphql/queries";

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
      <Search onSearch={setSearchValue} searchValue={searchValue} />
      <div className={styles.animalContainer}>
        {filterAnimals().map((animal) => (
          <Link key={animal.node.id} to={`animal/${animal.node.id}`}>
            <AnimalCard
              id={animal.node.id}
              name={animal.node.name}
              image={animal.node.imageUrl}
              width={300}
              height={140}
              className={styles.cardContainer}
            >
              <p>{animal.node.name}</p>
            </AnimalCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
