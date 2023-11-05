import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pwaterbottle from "../components/Pwaterbottle"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'
import Pwatch from "../components/Pwatch"

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Waterbottle = await Product.find({ category: "water bottle" });
  
    return {
      props: {
        Waterbottle: JSON.parse(JSON.stringify(Waterbottle)),
      },
    };
  }

const Waterbottle = ({Waterbottle}) => {
    return (
        <div>
            <Navbar />
            <img src="/Mshorts.avif" alt="Shorts-Banner" />
            <Pwaterbottle Waterbottle={Waterbottle} />
            <Footer/>
        </div>
    )
}


export default Waterbottle