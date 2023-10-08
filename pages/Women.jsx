import Wbanner from "../components/Wbanner"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import CategoryCard from "../components/CategoryCard"

const Women = () => {
    return (
        <div>
            <Navbar/>
            <Wbanner/>
            <section className="flex flex-wrap justify-around items-center p-4">
                <CategoryCard title="T-shirts" imageSrc="/Women-Tshirt.avif" link="/Men" />
                <CategoryCard title="Shorts" imageSrc="/Women-shorts.webp" link="/Women" />
                <CategoryCard title="Sports Footwear" imageSrc="/Men-Shoes.avif" link="/Kids" />
                <CategoryCard title="Sunglasses" imageSrc="/Women-Sunglasses.avif" link="/Shoes" />
                <CategoryCard title="Track-pants" imageSrc="/Men-Trackpant.avif" link="/Accessories" />
                <CategoryCard title="Collar T-shirts" imageSrc="/Men-Collartshirt.avif" link="/SportsEquipment" />
            </section>
            <img src="/Women-Banner4.avif" alt="Women Shorts" />
            <Footer/>
        </div>
    )
}

export default Women;