import styles from "./styles.module.css";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => (
  <AppBar position="static" className={styles.root}>
    <Container
      maxWidth="lg"
      sx={{ display: "flex" }}
      className={styles.container}
    >
      <NavLink to="/" className={`${styles.navItem} ${styles.logo}`}>
        <h2>PetBook</h2>
      </NavLink>
      <Toolbar>
        <NavLink to="/" className={styles.navItem}>
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/about" className={styles.navItem}>
          <h4>About</h4>
        </NavLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
