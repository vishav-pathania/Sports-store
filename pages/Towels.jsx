import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Ptowels from "../components/Ptowels"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Towels = await Product.find({ category: "Towels" });
  
    return {
      props: {
        Towels: JSON.parse(JSON.stringify(Towels)),
      },
    };
  }

const Towels = ({Towels}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Ptowels Towels={Towels} />
            <Footer/>
        </div>
    )
}


export default Towels