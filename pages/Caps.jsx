import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pcaps from "../components/Pcaps"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Caps = await Product.find({ category: "caps" });
  
    return {
      props: {
        Caps: JSON.parse(JSON.stringify(Caps)),
      },
    };
  }

const Caps = ({Caps}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Pcaps Caps={Caps} />
            <Footer/>
        </div>
    )
}


export default Caps