import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pgymgloves from "../components/Pgymgloves"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Gymgloves = await Product.find({ category: "Gymgloves" });
  
    return {
      props: {
        Gymgloves: JSON.parse(JSON.stringify(Gymgloves)),
      },
    };
  }

const Gymgloves = ({Gymgloves}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Pgymgloves Gymgloves={Gymgloves} />
            <Footer/>
        </div>
    )
}


export default Gymgloves