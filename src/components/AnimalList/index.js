import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

import styles from "./styles.module.css";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  if (error) return <div>Oppps, something went wrong!</div>;

  if (loading) return <div>Loading</div>;

  return <div className={styles.container}>Animal List komponentas!</div>;
};

export default AnimalList;
