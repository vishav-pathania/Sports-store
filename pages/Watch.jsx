import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pwatch from "../components/Pwatch"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Watch = await Product.find({ category: "sports watch" });
  
    return {
      props: {
        Watch: JSON.parse(JSON.stringify(Watch)),
      },
    };
  }

const Watch = ({Watch}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Pwatch Watch={Watch} />
            <Footer/>
        </div>
    )
}


export default Watch