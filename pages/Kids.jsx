import Navbar from "../components/navbar"
import Footer from "../components/footer"
import CategoryCard from "../components/CategoryCard"


const Kids = () => {
    return (
        <div>
            <Navbar />
            <img src="/Kids-Banner1.avif" alt="Kids Banner" />
            <section className="flex flex-wrap justify-around items-center p-4">
                <CategoryCard title="T-Shirt" imageSrc="/Kids-Shirts.jpeg" link="/Men" />
                <CategoryCard title="Shorts" imageSrc="/Kids-Shorts.jpg" link="/Women" />
                <CategoryCard title="Shoes" imageSrc="/Kids-Shoes.jpg" link="/Kids" />
                <CategoryCard title="Trackpant" imageSrc="/Kids-Trackpant.png" link="/Shoes" />
                <CategoryCard title="TrackSuit" imageSrc="/Kids-Tracksuit.jpg" link="/Accessories" />
            </section>
            <Footer />
        </div>
    )
}

export default Kids