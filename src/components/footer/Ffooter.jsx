import './footer.css'
import { CiShoppingCart } from "react-icons/ci";




export default function Ffooter() {
  return (
    <footer>
      <div className="item-footer-1">
        <div className="footer-side-1">

          <div className="logo-sandang">
          <CiShoppingCart  id='icon-footer'/>
        <span>Sandang Clothing</span>
          </div>
          <div className="text-input">
            <div>
              <span>Join our newsletter</span>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className='inp-footer-btn'>
              <div className="inp-footer">
                <input type="mail" placeholder='Enter your email'/>
              </div>
              <div className="btn-footer">
                <button>Subcribe</button>
              </div>

            </div>
          </div>





        </div>
        <div className="footer-side-2">
          <div className="list1">
          <div className="card-list-foter">
           <div className="title-list">
              <span>Company</span>
            </div>
            <div className="items-list">
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
            </div>
           </div>


           <div className="card-list-foter">
           <div className="title-list">
              <span>Legal</span>
            </div>
            <div className="items-list">
            <ul>
            <li><a href="#">Term</a></li>
            <li><a href="#">Primacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Setting</a></li>
          </ul>
            </div>
           </div>




           <div className="card-list-foter">
           <div className="title-list">
              <span>Resoures</span>
            </div>
            <div className="items-list">
            <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Support</a></li>
          </ul>
            </div>
           </div>


          </div>
          








        </div>
      </div>
    </footer>
  )
}
