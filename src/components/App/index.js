import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./styles.module.css";

import AnimalList from "../AnimalList";
import AnimalProfile from "../AnimalProfile";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/animal/:id" element={<AnimalProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
