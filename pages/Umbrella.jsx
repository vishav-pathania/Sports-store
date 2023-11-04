import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pumbrella from "../components/Pumbrella"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Umbrella = await Product.find({ category: "Umbrella" });
  
    return {
      props: {
        Umbrella: JSON.parse(JSON.stringify(Umbrella)),
      },
    };
  }

const Umbrella = ({Umbrella}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Pumbrella Umbrella={Umbrella} />
            <Footer/>
        </div>
    )
}


export default Umbrella