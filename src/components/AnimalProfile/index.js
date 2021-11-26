import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";

import SkeletonLoader from "../SkeletonLoader";
import AnimalCard from "../AnimalCard";

import styles from "./styles.module.css";

import { GET_ANIMAL_PROFILE } from "../../graphql/queries";

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
        <AnimalCard
          id={data.animal.id}
          name={data.animal.name}
          image={data.animal.imageUrl}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
        >
          <p>{data.animal.name}</p>
          <p>{`Breed: ${data.animal.details?.breed?.value}`}</p>
          <p>{`Color: ${data.animal.details?.color?.value}`}</p>
          <div dangerouslySetInnerHTML={{ __html: data.animal.comments }} />
        </AnimalCard>
      )}
    </div>
  );
};

export default AnimalProfile;
