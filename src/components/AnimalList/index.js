import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

import styles from "./styles.module.css";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  return (
    <>
      {loading ? 
        <LinearProgress color="primary" />
       : 
        <div className={styles.container}>
          {data.animals?.edges.map((animal) => (
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
        </div>}
    </>
  );
};

export default AnimalList;
