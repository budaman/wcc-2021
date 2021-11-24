import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About this project</h1>
      <p>
        Open Source database for administration and documentation of sheltered
        animals information.
      </p>
      <p>
        <b>Goal:</b> Easen the process of sheltered animals information
        administration.
      </p>
      <h6>
        <b>Main functions:</b>
      </h6>
      <ul>
        <li>Portfolios of Animal shelter organizations</li>
        <li>Animal cards with main information for shelter/future owners</li>
        <li>Animal check-in/check-out process</li>
        <li>
          Various events related to particular animal care - like vacinnation,
          sterilization etc.
        </li>
      </ul>
      <p>`And many more to come :)`</p>
    </div>
  );
};

export default About;
