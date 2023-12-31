import { useContext } from "react"
import Signin from "./Signin"
import Link from "next/link"
import { CartContext } from "./CartContext"


const Navbar = () => {
  const {cartProducts} = useContext(CartContext)
  return (
    <div className="bg-blue-600 md:h-16  flex items-center">
      <div className="px-2 md:pr-4 lg:pr-6 xl:pr-10 2xl:pr-12 flex items-center justify-between h-14">
        <Link href="/SportsPage" className="text-white     p-2 m-1 ml-0 rounded-xl  hover:bg-blue-500">Sports Score</Link>
        <Link href="/About" className="text-white    px-3 p-2 m-1 rounded-xl  hover:bg-blue-500">About us</Link>
        <Link href="/Contact" className="text-white   px-3 p-2 m-1 rounded-xl  hover:bg-blue-500">Contact</Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Link href="/" className="font-bold md:px-6 py-2  rounded-xl  hover:bg-blue-500 text-xl text-white">
          TruSports
        </Link>
      </div>
      <div className="flex items-center justify-end  mr-4 space-x-4">
        
        <Link href="/Cart">
          <div className="flex font-semibold rounded-lg text-lg p-2 text-center hover:bg-blue-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className=" w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          ({cartProducts.length})
          </div>
        
        </Link>

        <Signin />

      </div>
    </div>
  )
}


export default Navbar