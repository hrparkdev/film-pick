import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Film({ id, coverImg, title }) {
  return (
    <li>
      <Link to={`/film/${id}`}>
        <img src={coverImg} alt={title} />
        <div>
          <h2>{title}</h2>
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