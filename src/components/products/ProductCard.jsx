import React from 'react'

const ProductCard = ({urun}) => {

  return (
    <div className="card">
            <img src= {urun.image} alt= {urun.title}/> 
            <div className="card__over">
                <h2>{urun.title}</h2>
            </div>
            
            <div className="price">
                <h3>{urun.price} $</h3>
            </div>
            
    </div>
  )
}

export default ProductCard
