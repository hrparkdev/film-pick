import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/Film.module.css"

function Film({ id, coverImg, title }) {
  return (
    <li className={styles.film}>
      <Link to={`/film/${id}`}>
        <img src={coverImg} alt={title} className={styles.film__img} />
        <div className={styles.film__titleWrapper}>
          <h2 className={styles.film__title}>{title}</h2>
        </div>
      </Link>
    </li>
  );
}

Film.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Film;