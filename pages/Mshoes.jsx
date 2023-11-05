import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Mpshoes from "../components/Mpshoes"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const menShoes = await Product.find({ category: "Men/Shoes" });
  
    return {
      props: {
        menShoes: JSON.parse(JSON.stringify(menShoes)),
      },
    };
  }

const Mshoes = ({menShoes}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Mpshoes menShoes={menShoes} />
            <Footer/>
        </div>
    )
}


export default Mshoes