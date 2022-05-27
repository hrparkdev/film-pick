import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getDetails = async () => {
    const json = await (
      await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    ).json();
    setDetail(json);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div>
      <header className={header.pageHeader}>
        <h1 className={header.pageHeader__title}>
          <Link to={"/"}>Film Pick</Link>
        </h1>
      </header>

      <main>
        {loading ? (
          <div className={loader.pageLoader}>
            <img src="/assets/img/spinner.gif" alt="spinner" />
          </div>
        ) : (
          <div>
            <FilmDetail
              key={detail.id}
              id={detail.id}
              coverImg={detail.image}
              title={detail.title}
              description={detail.description}
              releaseDate={detail.release_date}
              producer={detail.producer}
              runningTime={detail.running_time}
              filmBanner={detail.movie_banner}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default Detail;