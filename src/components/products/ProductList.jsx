import React from 'react'
import "./Product.scss"
import ProductCard from "./ProductCard";

const ProductList = ({urunler}) => {
   console.log(urunler) ;
  return (
    <div className="product-list">
    {
      urunler.map ((urun, index) => {   
        return (
          <ProductCard urun= {urun} key= {index}/>   
        )
      })
    }
    </div>
  )
}

export default ProductList
