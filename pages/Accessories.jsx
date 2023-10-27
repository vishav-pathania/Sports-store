import Navbar from "../components/navbar";
import Abanner from "../components/Abanner";
import CategoryCard from "../components/CategoryCard";
import Footer from '../components/footer'

const Accessories = () => {
    return (
        <div>
            <Navbar/>
            <Abanner />
            <h2 className="mt-4 ml-4 font-semibold text-2xl">Must Have Accessories</h2>
            <section className="flex flex-wrap justify-around items-center p-4">
                <CategoryCard title="Water Bottles" imageSrc="/waterbottle.webp" link="/men" />
                <CategoryCard title="Caps & Hats" imageSrc="/caps.jpg" link="/women" />
                <CategoryCard title="Sunglasses" imageSrc="/sunglasses.avif" link="/kids" />
                <CategoryCard title="Watches" imageSrc="/watches.jpg" link="/Shoes" />
                <CategoryCard title="Towels" imageSrc="/towels.webp" link="/Accessories" />
                <CategoryCard title="Umbrella" imageSrc="/umbrella.avif" link="/SportsEquipment" />
            </section>
            <Footer />
        </div>
    )
}

export default Accessories