import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Ptrademills from "../components/Ptrademills"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Trademills = await Product.find({ category: "Trademills" });
  
    return {
      props: {
        Trademills: JSON.parse(JSON.stringify(Trademills)),
      },
    };
  }

const Trademills = ({Trademills}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Ptrademills Trademills={Trademills} />
            <Footer/>
        </div>
    )
}


export default Trademills