import Header from "../components/header/header";
import Main from "../components/main/main";
import ProductMain from "../components/productMain/productMain";
import Sec1 from "../components/sec1/Sec1";
import Footer from "../components/footer/Ffooter"




export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <ProductMain id='productshome'/>
      <Sec1/>
      <Footer/>

    </div>
  );
}
