import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Mptshirts from "../components/Mptshirts"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Mtshirts = await Product.find({ category: "Men/tshirt" });
  
    return {
      props: {
        Mtshirts: JSON.parse(JSON.stringify(Mtshirts)),
      },
    };
  }

const Mtshirts = ({Mtshirts}) => {
    return (
        <div>
            <Navbar />
            <img src="/mtshirts.avif" alt="Tshirts-Banner" />
            <Mptshirts Mtshirts={Mtshirts} />
            <Footer/>
        </div>
    )
}


export default Mtshirts