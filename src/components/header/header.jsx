import './header.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header>
        <div className="logo">
        <CiShoppingCart id='logo' />

        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="#">About us</Link>
            <Link to="#">Blog</Link>
        </div>
        <div className="log-icons">
            <div className="icon">

            <CiBellOn id='ico' />
        <CiShoppingCart id='ico' />
            </div>
            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </div>

    </header>
  )
}
