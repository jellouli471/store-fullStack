import Header from "../components/header/header"
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Products() {

const [data,setData]=useState([])

async function getData() {
  const res =await axios.get('https://fakestoreapi.com/products')
  setData(res.data)
}
useEffect(()=>{
  getData()
},[])
















  return (
    <div>
        <Header/>
       <div className="pr-items">
        
    <div className="product-main">


<div className="item1-product">
  <div className="product-tit-shearch">
    <div className="tit-pr">
      <h2>Our Product</h2>
    </div>
    <div className="search-pr">
      <CiSearch  className="searcheicon"/>
      <input type="text" placeholder="Find style" />
    </div>
  </div>
  <div className="product-category">
      <div id="category"><span>All</span></div>
      <div id="category"><span>Shirt</span></div>
      <div id="category"><span>Trousers</span></div>
      <div id="category"><span>Shorts</span></div>
      <div id="category"><span>Cap</span></div>
      <div id="category"><span>Jacket</span></div>
      <div id="category"><span>Hoodie</span></div>
      <div id="category"><span>Shoe</span></div>
      <div id="category"><span>Sock</span></div>
      <div id="category"><span>Watch</span></div>
      <div id="category"><span>Glasses</span></div>
  </div>
</div>
<div className="item2-product">
  <div className="list-products">


{data.map((item)=>(


<div className="card-product-list" key={item.id}>
          <div className="card-product-img">
              <img src={item.image} alt="" />
          </div>
          <div className="card-title-price-products">
              <div className="title-card-products">
                  <span>{item.title.slice(0,10)}</span>
                  <span> {item.category} </span>
              </div>
              <div className="price-card-product">
                  <h2>
                      ${item.price}
                  </h2>
              </div>
          </div>
      </div>


))}

      

  </div>
</div>
</div>
       </div>
    </div>
  )
}
