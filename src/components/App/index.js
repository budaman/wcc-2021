import "./styles.css";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

const GET_ANIMALS_QUERY = loader("../../graphql/queries/animal-list.graphql");

function App() {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  return (
    <div className="container">
      {data.animals?.edges.map((animal) => (
        <div key={animal.node.id}>
          <p>{animal.node.name}</p>
          <img
            src={
              animal.node.imageUrl ||
              "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg"
            }
          />
        </div>
      ))}
    </div>
  );
}

export default App;
