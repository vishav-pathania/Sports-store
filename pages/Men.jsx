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
                <CategoryCard title="T-shirts & Tanks" imageSrc="/Men-Tshirt.avif" link="/Mtshirts" />
                <CategoryCard title="Shorts" imageSrc="/Men-Shorts.avif" link="/Mshorts" />
                <CategoryCard title="Sports Footwear" imageSrc="/Men-Shoes.avif" link="/Mshoes" />
                <CategoryCard title="Sunglasses" imageSrc="/Men-Sunglasses.avif" link="/Msunglasses" />
                <CategoryCard title="Track-pants" imageSrc="/Men-Trackpant.avif" link="/Mtrackpant" />
                <CategoryCard title="Collar T-shirts" imageSrc="/Men-Collartshirt.avif" link="/Mctshirts" />
            </section>
            <img src="/Mbanner4.avif" alt="Men T-Shirts Collection" className="mt-4" />
            <Footer/>
        </div>
    )
}

export default Men