import { useState, useEffect } from "react";
import Film from "../components/Film";
import { Link } from "react-router-dom";

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
    <div>
      <header>
        <h1>
          <Link to={"/"}>Film Pick</Link>
        </h1>
      </header>

      <main>
        {loading ? (
          <div>
            <img src="/assets/img/spinner.gif" alt="spinner" />
          </div>
        ) : (
          <section>
            <ul>
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
    </div>
  );
}

export default Home;