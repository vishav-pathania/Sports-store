import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pbikes from "../components/Pbikes"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Bikes = await Product.find({ category: "Exbikes" });
  
    return {
      props: {
        Bikes: JSON.parse(JSON.stringify(Bikes)),
      },
    };
  }

const Bikes = ({Bikes}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Pbikes Bikes={Bikes} />
            <Footer/>
        </div>
    )
}


export default Bikes