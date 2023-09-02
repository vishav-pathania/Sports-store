import Navbar from '../components/navbar'
import CategoryCard from '../components/CategoryCard'


export default function SportsEquipment() {
    return (
        <div>
            <Navbar />
            <img src="/sportequipment.avif" alt="" />
            <div className="w-full bg-white h-auto my-2 md:my-3 px-3 md:px-5 py-3 md:py-5" >
                <h2 class="md:text-3xl text-18 text-black font-bold tracking-normal">Lift more, pay Less!</h2>
            </div>
            <section className="flex justify-around items-center p-4">
                <CategoryCard title="Gymgloves" imageSrc="/Gymgloves.jpg" link="/Gymgloves" />
                <CategoryCard title="Resistance Band" imageSrc="/resistanceband.webp" link="/resistanceband" />
                <CategoryCard title="Weights & Dumbells" imageSrc="/dumbells.webp" link="/Weights-dumbells" />
                <CategoryCard title="Exercise Bikes" imageSrc="/bikes.jpg" link="/bikes" />
                <CategoryCard title="Accessories" imageSrc="/accessories.jpeg" link="/Accessories" />
                <CategoryCard title="Sports Equipment" imageSrc="/sports.jpeg" link="/SportsEquipment" />
            </section>
        </div>

    )
}