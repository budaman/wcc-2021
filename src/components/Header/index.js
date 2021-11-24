import { Toolbar, AppBar, Container } from "@mui/material";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <AppBar position="static" className={styles.root}>
    <Container className={styles.container}>
      <NavLink to="/" className={styles.navItem}>
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
