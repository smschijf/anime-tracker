import React, { useEffect, useState } from "react";
import "./Components/style.css";
import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";

function App() {
  const [search, setSearch] = useState("Kaguya-sama");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <header>
        <h1>
          My<strong>Anime</strong>List
        </h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </header>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList animelist={animeData} setAnimeInfo={setAnimeInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
