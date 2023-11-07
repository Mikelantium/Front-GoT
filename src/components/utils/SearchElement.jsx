import React from 'react'

export default function SearchElement({updateFilter}) {
    const doFilter = (event) =>{
        const {value} = event.target
        updateFilter(value)
    }
  return (
    <div className='search'>
      <input type="text" onChange={doFilter} placeholder="Buscar..." className='search-input'></input>
    </div>
  )
}
