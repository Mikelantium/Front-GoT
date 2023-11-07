import React from 'react'
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';

export default function CharactersGallery({data}) {
  return (
    <div className='container'>
    <SimpleBar forceVisible="y" autoHide="false" style={{ maxHeight: 500 }}>
    <div className="row container">
              {data.map((item) => (          
          <div key={item.id} className="col-6 col-lg-2">
          <Link to={`/characters/${item.id}`}>
            <img className='img-ch hideDiv margin-top' src={"https://got-back-dbjson.vercel.app" + item.image} alt={item.name} />
            <div className='hide alignCenter'>
              <h4 className='e-h4 shadow'>{item.name}</h4>
            </div>
            </Link>
          </div>
         
        ))} 
    </div>
    </SimpleBar>
    </div>
  )
}
