import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";
import loader from "../styles/components/loader.module.css";
import header from "../styles/components/header.module.css";
import footer from "../styles/components/footer.module.css";

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
  }, []);

  return (
    <div>
      <header className={header.pageHeader}>
        <h1 className={header.pageHeader__title}>
          <Link to={`${process.env.PUBLIC_URL}/`}>Film Pick</Link>
        </h1>
      </header>

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
      
      <footer className={footer.pageFooter}>
        <p>&copy; Film Pick 2022</p>
      </footer>
    </div>
  );
}

export default Detail;