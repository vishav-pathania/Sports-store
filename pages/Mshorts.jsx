import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Products from "../components/Products"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const menShorts = await Product.find({ category: "Men/shorts" });
  
    return {
      props: {
        menShorts: JSON.parse(JSON.stringify(menShorts)),
      },
    };
  }

const Mshorts = ({menShorts}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Products menShorts={menShorts} />
            <Footer/>
        </div>
    )
}


export default Mshorts