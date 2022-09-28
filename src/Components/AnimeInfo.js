import React from "react";

export const AnimeInfo = (props) => {
  const {title, source, rank, score, popularity, members, status, rating, duration}=props.AnimeInfo;
  return (
    <>
      <div className="anime-content">
        <h3>{title}</h3><br/>
        <img src={props.animeInfo.images.jpg.large_image_url} alt=""/><br/>
      </div>
    </>
  );
}