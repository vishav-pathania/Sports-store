import Link from "next/link"
import { useContext } from "react";
import { CartContext } from "./CartContext";


export default function Mpctshirts({ Mcollartshirts }) {
  const {addProduct} = useContext(CartContext)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">High Quality Collar T-shirts Just For You ....</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Mcollartshirts?.length > 0 && Mcollartshirts.map(product => (
            <div key={product._id}>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.images}
                  alt={product.category}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={"/product/" + product._id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
              </div>
              </div>
              <button onClick={()=>addProduct(product._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-3 rounded inline-flex items-center">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}