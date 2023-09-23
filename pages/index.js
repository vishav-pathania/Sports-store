import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import CategoryCard from '../components/CategoryCard'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import Stripe from '../components/stripe'
import Footer from '../components/footer'
import { Product } from '../models/Product'
import { mongooseConnect } from '../lib/mongoose'


export default function Home(featuredProduct) {
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
      <Trending featuredProduct={featuredProduct}/>
      <Footer />
    </div>
  )
}



export async function getServerSideProps() {
  const featuredProductId = '650ecf30df24e1bd61c90d8f';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    },
  };
}

