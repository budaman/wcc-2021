import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const GET_ANIMAL_PROFILE = loader(
  "../../graphql/queries/animal-profile.graphql"
);

const AnimalProfile = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ANIMAL_PROFILE, {
    variables: { id: Number(id) },
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            width={600}
            height={250}
            animation="wave"
            sx={{ bgcolor: "yellow.300" }}
          />
          <Skeleton
            variant="rectangular"
            width={600}
            height={150}
            animation="wave"
            sx={{ bgcolor: "yellow.300" }}
          />
        </Stack>
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
