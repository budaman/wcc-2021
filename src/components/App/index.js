import styles from "./styles.module.css";

import AnimalList from "../AnimalList";
import Header from "../Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AnimalList />
    </div>
  );
};

export default App;
