import PropTypes from "prop-types";
import styles from "../styles/FilmDetail.module.css";

function FilmDetail({ 
  id, 
  coverImg, 
  title,  
  description, 
  releaseDate,
  producer, 
  runningTime, 
  filmBanner 
}) {
  return (
    <div> 
      <section>
        <img src={filmBanner} alt={title} className={styles.filmBanner} />
      </section>

      <article className={styles.filmDetailContainer}>
        <div className={styles.filmDetailContainer__coverImgWrapper}>
          <img src={coverImg} alt={title} className={styles.filmDetailContainer__coverImg} />
        </div>
        <article className={styles.filmDetailContainer__filmDetail}>
          <h2 className={styles.filmDetailContainer__filmDetail__title}>{title}</h2>
          <h4>Release Date: {releaseDate}</h4>
          <h4>Producer: {producer}</h4>
          <h4>Running Time: {runningTime} minutes</h4>
          <h3>Description</h3>
          <p>{description}</p>
        </article>
      </article>
    </div>
  );
}

FilmDetail.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  runningTime: PropTypes.string.isRequired,
  filmBanner: PropTypes.string.isRequired,
};

export default FilmDetail;