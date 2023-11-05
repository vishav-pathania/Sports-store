import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Pdumbbells from "../components/Pdumbbells"
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

export async function getServerSideProps() {
  
    await mongooseConnect();
    const Dumbbells = await Product.find({ category: "dumbells" });
  
    return {
      props: {
        Dumbbells: JSON.parse(JSON.stringify(Dumbbells)),
      },
    };
  }

const Dumbbells = ({Dumbbells}) => {
    return (
        <div>
            <Navbar />
            <img src="/Equipment.avif" alt="Equipment-Banner" />
            <Pdumbbells Dumbbells={Dumbbells} />
            <Footer/>
        </div>
    )
}


export default Dumbbells