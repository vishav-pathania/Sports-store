import Navbar from '../components/navbar'
import CategoryCard from '../components/CategoryCard'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import Stripe from '../components/stripe'
import Footer from '../components/footer'
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'

//65181274d619d061333dbb90

export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

export default function Home({ featuredProduct, newProducts }) {
  return (
    <div>
      <Navbar />
      <section className="flex flex-wrap justify-around items-center p-4">
        <CategoryCard title="Men" imageSrc="/Men.avif" link="/men" />
        <CategoryCard title="Women" imageSrc="/women.webp" link="/women" />
        <CategoryCard title="Kids" imageSrc="/kids.jpg" link="/kids" />
        <CategoryCard title="Shoes" imageSrc="/shoes.jpg" link="/Shoes" />
        <CategoryCard title="Accessories" imageSrc="/accessories.jpeg" link="/Accessories" />
        <CategoryCard title="Sports Equipment" imageSrc="/sports.jpeg" link="/SportsEquipment" />
      </section>
      <Banner />
      <Stripe />
      <Trending featuredProduct={featuredProduct} newProducts={newProducts} />
      <Footer />
    </div>
  )
}
