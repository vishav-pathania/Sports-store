import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Presistanceband from "../components/Presistanceband"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Resistanceband = await Product.find({ category: "ResistanceBand" });
  
    return {
      props: {
        Resistanceband: JSON.parse(JSON.stringify(Resistanceband)),
      },
    };
  }

const Resistanceband = ({Resistanceband}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Presistanceband Resistanceband={Resistanceband} />
            <Footer/>
        </div>
    )
}


export default Resistanceband