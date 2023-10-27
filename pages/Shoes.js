import Navbar from "../components/navbar"
import CategoryCard from "../components/CategoryCard"
import Footer from '../components/footer'


const Shoes = () => {
    return (
        <div>
            <Navbar />
            <img src="/shoes-section.avif" alt="shoes" />
            <section className="flex flex-wrap justify-around items-center p-4">
                <CategoryCard title="Running Shoes" imageSrc="/Men-Shoes.avif" link="/Men" />
                <CategoryCard title="Casual Shoes" imageSrc="/Men-Casualshoes.avif" link="/Women" />
                <CategoryCard title="Football Studs" imageSrc="/Football-Studs.jpg" link="/Kids" />
                <CategoryCard title="Cricket Shoes" imageSrc="/Cricket-Shoes.avif" link="/Shoes" />
                <CategoryCard title="Sandals" imageSrc="/Sandals.avif" link="/Accessories" />
                <CategoryCard title="Flip Flops" imageSrc="/FlipFlops.avif" link="/SportsEquipment" />
            </section>
            <Footer />
        </div>
    )
}

export default Shoes