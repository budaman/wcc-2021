import AnimalList from "../AnimalList";

import styles from "./styles.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      Pet Book App
      <AnimalList />
    </div>
  );
};

export default App;
