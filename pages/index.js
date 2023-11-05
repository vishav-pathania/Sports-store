import Navbar from '../components/navbar'
import CategoryCard from '../components/CategoryCard'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import Stripe from '../components/stripe'
import Footer from '../components/footer'
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'


export async function getServerSideProps() {
  
  await mongooseConnect();
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 8 });

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}


export default function Home({ newProducts }) {
  return (
    <div>
      <Navbar />
      <section className="flex flex-wrap justify-around items-center p-4">
        <CategoryCard title="Men" imageSrc="/Men.avif" link="/Men" />
        <CategoryCard title="Women" imageSrc="/women.webp" link="/Women" />
        <CategoryCard title="Kids" imageSrc="/kids.jpg" link="/Kids" />
        <CategoryCard title="Shoes" imageSrc="/shoes.jpg" link="/Shoes" />
        <CategoryCard title="Accessories" imageSrc="/accessories.jpeg" link="/Accessories" />
        <CategoryCard title="Sports Equipment" imageSrc="/sports.jpeg" link="/SportsEquipment" />
      </section>
      <Banner />
      <Stripe />
      <Trending  newProducts={newProducts} />
      <Footer />
    </div>
  )
}
