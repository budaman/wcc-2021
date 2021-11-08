import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Header = ({ back }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Pet Book App</h1>
    {back && (
      <div className={styles.back}>
        <Link to="/">
          <KeyboardBackspaceIcon />
        </Link>
      </div>
    )}
  </div>
);

export default Header;
