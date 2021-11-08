import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import Header from "../Header";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const GET_ANIMAL_PROFILE = loader(
  "../../graphql/queries/animal-profile.graphql"
);

const AnimalProfile = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ANIMAL_PROFILE, {
    variables: { id: Number(id) },
  });

  if (loading) {
    return <div>loading</div>;
  }
  const { animal } = data;

  return (
    <>
      <Header back />
      <div className={styles.container}>
        <Card
          sx={{ width: 600 }}
          key={animal.id}
          className={styles.cardContainer}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={
              animal.imageUrl ||
              "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7"
            }
          />
          <CardContent>
            <p>{animal.name}</p>
            <p>{`Breed: ${animal.details?.breed?.value}`}</p>
            <p>{`Color: ${animal.details?.color?.value}`}</p>
            <div dangerouslySetInnerHTML={{ __html: animal.comments }} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AnimalProfile;
