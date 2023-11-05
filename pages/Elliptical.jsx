import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pelliptical from "../components/Pelliptical"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Elliptical = await Product.find({ category: "Eleptical and Crosstrainers" });
  
    return {
      props: {
        Elliptical: JSON.parse(JSON.stringify(Elliptical)),
      },
    };
  }

const Elliptical = ({Elliptical}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Pelliptical Elliptical={Elliptical} />
            <Footer/>
        </div>
    )
}


export default Elliptical