import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./styles.module.css";

import AnimalList from "../AnimalList";
import AnimalProfile from "../AnimalProfile";
import About from "../About";
import Header from "../Header";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/animal/:id" element={<AnimalProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
