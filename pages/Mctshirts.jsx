import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Mpctshirts from "../components/Mpctshirts"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Mcollartshirts = await Product.find({ category: "Men/Collar tshirt" });
  
    return {
      props: {
        Mcollartshirts: JSON.parse(JSON.stringify(Mcollartshirts)),
      },
    };
  }

const Mctshirts = ({Mcollartshirts}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mcollartshirts.avif" alt="Collar Tshirts-Banner" />
            <Mpctshirts Mcollartshirts={Mcollartshirts} />
            <Footer/>
        </div>
    )
}


export default Mctshirts