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
                <CategoryCard title="Water Bottles" imageSrc="/waterbottle.webp" link="/Waterbottle" />
                <CategoryCard title="Caps & Hats" imageSrc="/caps.jpg" link="/Caps" />
                <CategoryCard title="Sunglasses" imageSrc="/sunglasses.avif" link="/Msunglasses" />
                <CategoryCard title="Watches" imageSrc="/watches.jpg" link="/Watch" />
                <CategoryCard title="Towels" imageSrc="/towels.webp" link="/Towels" />
                <CategoryCard title="Umbrella" imageSrc="/umbrella.avif" link="/Umbrella" />
            </section>
            <Footer />
        </div>
    )
}

export default Accessories