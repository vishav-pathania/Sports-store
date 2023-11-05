import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Mpsunglasses from "../components/Mpsunglasses"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Sunglasses = await Product.find({ category: "Sunglasses" });
  
    return {
      props: {
        Sunglasses: JSON.parse(JSON.stringify(Sunglasses)),
      },
    };
  }

const Mshorts = ({Sunglasses}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Mpsunglasses Sunglasses={Sunglasses} />
            <Footer/>
        </div>
    )
}


export default Mshorts