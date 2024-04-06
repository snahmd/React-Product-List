import React from 'react'
import HeaderStyles from './Header.module.scss'

const Header = ({kategoriler, text}) => {
  
  return (
    <div  className= {HeaderStyles.header}>
      <h1>{text}</h1>
      <div className= {HeaderStyles.btns}>
      {
        kategoriler.map((kategori, index) => {
          return <button key= {index}>{kategori}</button>
        })
      }
      </div>
    </div>
  )
}

export default Header
