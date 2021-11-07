import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import styles from "./styles.module.css";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  return (
    <div className={styles.container}>
      {data.animals?.edges.map((animal) => (
        <Card
          sx={{ width: 300 }}
          key={animal.node.id}
          className={styles.cardContainer}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              animal.node.imageUrl ||
              "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg"
            }
          />
          <CardContent>
            <p>{animal.node.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnimalList;
