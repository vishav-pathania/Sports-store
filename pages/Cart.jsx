import { useSession } from "next-auth/react";
import Link from "next/link";
import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import axios from "axios";

const Cart = () => {
    const { data: session } = useSession({ required: true });
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(response => {
                    setProducts(response.data);
                    console.log(response.data);
                });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    function moreOfThisProduct(id) {
        addProduct(id)
    }
    function lessOfThisProduct(id) {
        removeProduct(id)
    }

    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    if (session) {
        return (
            <div className="bg-slate-300 min-h-screen ">
                <Navbar />
                <div className="container mx-auto px-4 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white rounded-lg p-8">
                            {!cartProducts?.length && <div>Your Cart is Empty</div>}
                            {products?.length > 0 && (
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-2">Product</th>
                                            <th className="p-2">Quantity</th>
                                            <th className="p-2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(product => (
                                            <tr key={product._id}>
                                                <td className="p-2 text-center">
                                                    <img
                                                        src={product.images}
                                                        alt={product.title}
                                                        className="w-24 h-24 mx-auto rounded-md"
                                                    />
                                                    {product.title}
                                                </td>
                                                <td className="p-2 text-center justify-center flex items-center mt-10">
                                                    <button className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center" onClick={() => lessOfThisProduct(product._id)}>
                                                        -
                                                    </button>
                                                    <span className="mx-2 font-semibold">
                                                        {cartProducts.filter(id => id === product._id).length}
                                                    </span>
                                                    <button className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center" onClick={() => moreOfThisProduct(product._id)}>
                                                        +
                                                    </button>
                                                </td>
                                                <td className="p-2">₹ {cartProducts.filter(id => id === product._id).length * product.price}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>₹ {total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                        {!!cartProducts?.length && (
                            < div className="bg-white rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-4">Order Information</h2>
                                <form method="post" action="/api/checkout">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            name="name"
                                            onChange={ev => setName(ev.target.value)}
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                    </div>
                                    <div className="mb-4 flex space-x-4">
                                        <input
                                            type="text"
                                            placeholder="City"
                                            value={city}
                                            name="city"
                                            onChange={ev => setCity(ev.target.value)}
                                            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Postal Code"
                                            value={postalCode}
                                            name="postalCode"
                                            onChange={ev => setPostalCode(ev.target.value)}
                                            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            value={streetAddress}
                                            name="streetAddress"
                                            onChange={ev => setStreetAddress(ev.target.value)}
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="State"
                                            value={country}
                                            name="country"
                                            onChange={ev => setCountry(ev.target.value)}
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                        <input type="hidden"
                                            name="products"
                                            value={cartProducts.join(',')}
                                        />
                                    </div>
                                    <button type="submit"
                                        className="bg-black text-white border-0 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800"
                                    >
                                        Continue to payment
                                    </button>
                                </form>
                            </div>

                        )}
                    </div>
                </div>
            </div >
        );
    }
    return (
        <div></div>
    );
};

export default Cart;
