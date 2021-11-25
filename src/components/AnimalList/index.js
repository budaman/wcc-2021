import { useState } from "react";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { LinearProgress } from "@mui/material";

import AnimalCard from "../AnimalCard";
import Search from "../Search";

import { Link } from "react-router-dom";

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
      <Search onSearch={setSearchValue} searchValue={searchValue} />
      <div className={styles.animalContainer}>
        {filterAnimals().map((animal) => (
          <Link to={`animal/${animal.node.id}`}>
            <AnimalCard
              id={animal.node.id}
              name={animal.node.name}
              image={animal.node.imageUrl}
              width={300}
              height={140}
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
