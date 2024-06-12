import { Link } from 'react-router-dom';
import './main.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';





export default function Main() {

    const [data,setdata]=useState([])

   async function GetData() {
        const api = await axios.get('https://fakestoreapi.com/products')
        setdata(api.data.slice(0,4))
    }

    useEffect(()=>{
        GetData() 
    },[])



  return (
    <div className='main'>
        <div className="side1">
            <div className="bgimg">
                <img src="/imgg/main_pg-removebg-preview.png" alt="" />
            </div>
        </div>
        <div className="side2">
            <div className="item1">
                <div className="detail">
                <div className="tit1">
                    <h1>Discover the Latest Trends in Fashion Ecommerce</h1>
                </div>
                <div className="smalp">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus eligendi consectetur, cumque tempore voluptatem neque error quaerat accusantium, deserunt optio libero dolorum atque quae sed odit, aut facere? Inventore.</p>
                </div>
                <div className="btnShop">
                    <Link to="/products">Shop now</Link>
                </div>
                </div>
            </div>
            <div className="item2">




{data.map((item)=>(

<div className="card" key={item.id}>
                    <div className="im">
                    <img src={item.image} alt="" />
                    </div>
                    <div className="name-category-icon">
                       <div className="name-category">
                       <div className="name">
                            <span>{item.title.slice(0,7)}</span>
                        </div>
                        <div className="category">
                            <span>{item.category}</span>
                        </div>
                       </div>
                       <div className="icon-card">
                       <MdOutlineArrowOutward  id='icon-card'/>
                       </div>
                    </div>
                </div>


))}
                








               



            </div>
        </div>
    </div>
  )
}
