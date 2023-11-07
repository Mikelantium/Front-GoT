import React from "react";

export default function CharactersDetailsGallery({ data, img }) {
  console.log("https://got-back-dbjson.vercel.app" + img);
  console.log("https://got-back-dbjson.vercel.app" + data.image);
  return (
    <div className="details">
      <div className="details-card margin-bottom">
        <img
          className="img-ho margin-bottom"
          src={"https://got-back-dbjson.vercel.app" + data.image}
          alt={data.name}
        />
        <h2 className="e-h2">{data.name}</h2>
      </div>
      <div className="details-info margin-top">
        <div className="details-info-detail">
          <h3 className="e-h3 margin-bottom" >CASA</h3>
          <img className="img-ho" src={"https://got-back-dbjson.vercel.app" + img} alt={"house"} />
        </div>
        <div className="details-info-detail margin-top">
          <h3 className="e-h3">ALIANZAS</h3>
          {data.alliances.map((item) => (
            <p className="e-p margin-top" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="details-info-detail margin-top">
          <h3 className="e-h3">APARICIONES</h3>
          {data.episodes.map((item) => (
            <p className="e-p margin-top" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="details-info-detail margin-top">
          <h3 className="e-h3">PADRES</h3>
          {data.parents.map((item) => (
            <p className="e-p margin-top" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="details-info-detail margin-top">
          <h3 className="e-h3">DESCENDIENTES</h3>
          {data.siblings.map((item) => (
            <p className="e-p margin-top" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="details-info-detail margin-top">
          <h3 className="e-h3">TITULOS</h3>
          {data.titles.map((item) => (
            <p className="e-p margin-top" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
