import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Mptrackpant from "../components/Mptrackpant"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Mtrackpant = await Product.find({ category: "Men/trackpant" });
    
  
    return {
      props: {
        Mtrackpant: JSON.parse(JSON.stringify(Mtrackpant)),
      },
    };
  }

const Mtrackpant = ({Mtrackpant}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Mptrackpant Mtrackpant={Mtrackpant} />
            <Footer/>
        </div>
    )
}


export default Mtrackpant