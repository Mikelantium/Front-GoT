import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

export default function HousesGallery({ data }) {
  return (
    <div className='container'>
    <SimpleBar forceVisible="y" autoHide="false" style={{ maxHeight: 500 }}>
      <div className="row container">
        {data.map((item) => (          
          <div key={item.id} className="col-6 col-lg-2">
          <Link to={`/houses/${item.id}`}>
            <img className='img-ho margin-top' src={"https://got-back-dbjson.vercel.app" + item.image} alt={item.name} />
            <h4 className="e-h4 alignCenter margin-top margin-bottom">{item.name}</h4>
            </Link>
          </div>
         
        ))}       
      </div>
      </SimpleBar>
      </div>
  );
}
