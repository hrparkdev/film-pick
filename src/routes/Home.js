import { useState, useEffect } from "react";
import Film from "../components/Film";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import loader from "../styles/components/loader.module.css";
import header from "../styles/components/header.module.css";
import footer from "../styles/components/footer.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const getFilms = async () => {
    const json = await (
      await fetch(
        `https://ghibliapi.herokuapp.com/films`
      )
    ).json();
    setFilms(json);
    setLoading(false);
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className={styles.container}>
      <header className={header.pageHeader}>
        <h1 className={header.pageHeader__title}>
          <Link to={`${process.env.PUBLIC_URL}/`}>Film Pick</Link>
        </h1>
      </header>
      
      <section className={styles.banner}>
        <div className={styles.banner__bannerTitleWrapper}>
          <p className={styles.banner__bannerTitle}>Pick a Studio Ghibli Film you want to watch.</p>
        </div>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/banner.png`} 
          alt="banner" 
          className={styles.banner__bannerImg} 
        />
      </section>

      <main>
        {loading ? (
          <div className={loader.pageLoader}>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/spinner.gif`} 
              alt="spinner" 
              className={loader.pageLoader__spinner} 
            />
          </div>
        ) : (
          <section className={styles.filmsWrapper}>
            <ul className={styles.films}>
              {films.map((film) => (
                <Film
                  key={film.id}
                  id={film.id}
                  coverImg={film.image}
                  title={film.title}
                />
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className={footer.pageFooter}>
        <p>&copy; Film Pick 2022</p>
      </footer>
    </div>
  );
}

export default Home;