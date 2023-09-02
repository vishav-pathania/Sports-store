const navbar = () => {
    return (
    <nav className="bg-blue-500">
        <div className="px-4 flex items-center justify-between h-16">
            <div className="flex">
                <a href="" className="text-white text-lg font-semibold ">TruSports</a>
            </div>
            <div className="flex space-x-2">
                <form>
                    <input type="text" placeholder="Search" className="px-2 py-1 w-80 border flex rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </form>
                </div>
        <img src="/cart.png" alt="" className="rounded w-3 h-5 lg:w-8 lg:h-11" />
            <div className="flex space-x-2">
                <a href="#" className="text-white py-2 hover:text-gray-300">Login</a>
                <a href="#" className="bg-white text-blue-500 hover:bg-blue-400 py-2 px-4 rounded-full font-semibold transition duration-300">Sign Up</a>
            </div>        
            
            <div className="hidden md:flex space-x-3">
                <a href="#" className="text-white hover:text-gray-300">Products</a>
                <a href="#" className="text-white hover:text-gray-300">About Us</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </div>
        </div>
    </nav>
    )
    }
    
    export default navbar