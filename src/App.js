import Header from "./components/header/Header";
import "./App.scss"
import ProductList from "./components/products/ProductList";
import {products, categories} from "./helper/data";

function App() {
  return (
    <div>
     <Header kategoriler= {categories} text="Products List"/>
     < ProductList urunler= {products}/>

    </div>
  );
}

export default App;
