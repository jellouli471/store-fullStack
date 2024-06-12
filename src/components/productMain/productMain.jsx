import { useEffect, useState } from "react";
import "./productMain.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";












export default function ProductMain() {


const [pro,setPro]=useState([])

async function getPro() {
    const apipro = await axios.get('https://fakestoreapi.com/products')
    setPro(apipro.data.slice(0,8))
}

useEffect(()=>{
    getPro()
},[])


  return (



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





{pro.map((items)=>(



<div className="card-product-list" key={items.id}>
                <div className="card-product-img">
                    <img src={items.image} alt="" />
                </div>
                <div className="card-title-price-products">
                    <div className="title-card-products">
                        <span>{items.title.slice(0,10)}</span>
                        <span>{items.category}</span>
                    </div>
                    <div className="price-card-product">
                        <h2>
                           {items.price}
                        </h2>
                    </div>
                </div>
            </div>



))}





        </div>
      </div>
    </div>




  );
}
