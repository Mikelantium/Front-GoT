import React from "react";

export default function HousesDetailsGallery({ data }) {
  return (
    <div className="details">
      <div className="details-card margin-bottom">
        <img className="img-ho margin-bottom" src={"https://got-back-dbjson.vercel.app" + data.image} alt={data.name} />
        <h2 className="e-h2">{data.name}</h2>
      </div>
      <div className="details-info margin-top">
        <div className="details-info-detail">
          <h3 className="e-h3 margin-bottom">SEDE</h3>
          <p className="e-p margin-top">{data.settlement}</p>
        </div>
        <div className="details-info-detail">
          <h3 className="e-h3 margin-bottom">REGION</h3>
          <p className="e-p margin-top">{data.region}</p>
        </div>
        <div className="details-info-detail">
          <h3 className="e-h3 margin-bottom">ALIANZAS</h3>
          {data.alliances.map((item) => (
            <p className="e-p margin-top" key={item}>{item}</p>
          ))}
        </div>
        <div className="details-info-detail">
          <h3 className="e-h3 margin-bottom">RELIGIONES</h3>
          {data.religions.map((item) => (
            <p className="e-p margin-top" key={item}>{item}</p>
          ))}
        </div>
        <div className="details-info-detail">
          <h3 className="e-h3">FUNDACION</h3>
          <p className="e-p margin-top">{data.foundation}</p>
        </div>
      </div>
    </div>
  );
}
