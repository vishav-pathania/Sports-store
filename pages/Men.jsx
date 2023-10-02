import Navbar from "../components/navbar"
import Mbanner from "../components/Mbanner"
import CategoryCard from "../components/CategoryCard"
import Footer from "../components/footer"

const Men = () => {
    return (
        <div>
            <Navbar />
            <Mbanner />
            <section className="flex flex-wrap justify-around items-center p-4">
                <CategoryCard title="T-shirts & Tanks" imageSrc="/Men-Tshirt.avif" link="/Men" />
                <CategoryCard title="Shorts" imageSrc="/Men-Shorts.avif" link="/Women" />
                <CategoryCard title="Sports Footwear" imageSrc="/Men-Shoes.avif" link="/Kids" />
                <CategoryCard title="Sunglasses" imageSrc="/Men-Sunglasses.avif" link="/Shoes" />
                <CategoryCard title="Track-pants" imageSrc="/Men-Trackpant.avif" link="/Accessories" />
                <CategoryCard title="Collar T-shirts" imageSrc="/Men-Collartshirt.avif" link="/SportsEquipment" />
            </section>
            <img src="/Mbanner4.avif" alt="Men T-Shirts Collection" className="mt-4" />
            <Footer/>
        </div>
    )
}

export default Men