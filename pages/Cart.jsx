import { useSession, signIn, signOut } from "next-auth/react"
import Signin from "../components/Signin"
import Link from "next/link"
import Navbar from "../components/navbar"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext"
import axios from "axios"




const Cart = () => {
    const { data: session } = useSession({ required: true })
    const { cartProducts } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(response => {
                    setProducts(response.data);
                    console.log(response.data)
                })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    if (session) {

        return (
            <div className="bg-slate-300 min-h-screen">
                <Navbar />
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="grid grid-cols-8 md:grid-cols-3 gap-10 mt-10">
                        <div className="bg-white rounded-lg p-8">
                            {!cartProducts?.length && (
                                <div>Your Cart is Empty</div>
                            )}
                            {products?.length > 0 && (

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(product => (
                                            <tr>
                                                <td>{product.title}</td>
                                                <td>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </td>
                                                <td>
                                                    price
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            )}
                        </div>
                        {!!cartProducts?.length && (
                            <div className="bg-white rounded-lg p-8">
                                <h2>Order Information</h2>
                                <input type="text" placeholder="Address" />
                                <button className="bg-black text-white border-0 px-4 py-1.5 rounded-md cursor-pointer inline-flex items-center text-decoration-none font-poppins font-medium">Continue to payment</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Cart