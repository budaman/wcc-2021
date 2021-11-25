import { useParams } from "react-router-dom";

import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import { Card, CardMedia, CardContent } from "@mui/material";

import SkeletonLoader from "../SkeletonLoader";

import styles from "./styles.module.css";

const GET_ANIMAL_PROFILE = loader(
  "../../graphql/queries/animal-profile.graphql"
);

const CARD_WIDTH = 600;
const CARD_HEIGHT = 250;

const AnimalProfile = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ANIMAL_PROFILE, {
    variables: { id: Number(id) },
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <SkeletonLoader width={CARD_WIDTH} height={CARD_HEIGHT} />
      ) : (
        <Card
          sx={{ width: 600 }}
          key={data.animal.id}
          className={styles.cardContainer}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={
              data.animal.imageUrl ||
              "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7"
            }
          />
          <CardContent>
            <p>{data.animal.name}</p>
            <p>{`Breed: ${data.animal.details?.breed?.value}`}</p>
            <p>{`Color: ${data.animal.details?.color?.value}`}</p>
            <div dangerouslySetInnerHTML={{ __html: data.animal.comments }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AnimalProfile;
