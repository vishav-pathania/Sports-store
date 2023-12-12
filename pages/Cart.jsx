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
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [isSuccess,setIsSuccess] = useState(false);

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

    useEffect(() => {
        if (typeof window === 'undefined') {
          return;
        }
        if (window?.location.href.includes('success')) {
          setIsSuccess(true);
          clearCart();
        }
      }, []);

    function moreOfThisProduct(id) {
        addProduct(id)
    }
    function lessOfThisProduct(id) {
        removeProduct(id)
    }

    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name, email, city, postalCode, streetAddress, country,
            cartProducts,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }

    useEffect(() => {
        let total = 0;
        for (const productId of cartProducts) {
          const price = products.find((p) => p._id === productId)?.price || 0;
          total += price;
        }
      
        const calculatedDiscount = calculateDiscountedPrice(total);
        const discountedPrice = total - calculatedDiscount;
        setTotalPrice(total);
        setDiscount(calculatedDiscount);
        setFinalPrice(discountedPrice);
      }, [cartProducts, products]);

      function calculateDiscountedPrice(totalPrice) {
        let discount = 0;
      
        if (totalPrice >= 10000) {
            discount = (totalPrice * 0.15).toFixed(2);
          } else if (totalPrice >= 5000) {
            discount = (totalPrice * 0.1).toFixed(2);
          } else if (totalPrice >= 2000) {
            discount = (totalPrice * 0.05).toFixed(2);
          }
      
        return discount;
      }

    if (isSuccess) {
        return (
            <div>
                <Navbar />
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr,.8fr] gap-10 mt-10">
                        <div className="bg-white rounded-lg p-8">
                            <h1>Thanks for your order!</h1>
                            <p>We will email you when your order will be sent.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (session) {
        return (
            <div className="bg-blue-100 min-h-screen ">
                <Navbar />

                <div className="container mx-auto px-4 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 m-10  gap-28">
                        <div className="bg-white rounded-lg border-2 border-black p-8">
                            {!cartProducts?.length && <div>Your Cart is Empty</div>}
                            {products?.length > 0 && (
                                <div>
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-2">Product</th>
                                            <th className="p-2">Quantity</th>
                                            <th className="p-2">Price(MRP)</th>
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
                                                <td className="p-2">₹ {cartProducts.filter(id => id === product._id).length * product.price} <span className="text-slate-500 line-through">{((product.price * 1.2).toFixed(2))}</span></td>
                                            </tr>
                                        ))}  
                                        
                                    </tbody>
                                    
                                </table>
                                <div className="flex flex-col">                                             
                                           <div className=" justify-end w-fit mx-auto flex text-slate-600 p-1"> Total Price:₹ <div className="line-through">{totalPrice}</div> </div>

                                           <div className="w-fit mx-auto p-1"> - Bill Discount:₹ {discount} </div>
                                        
                                       <div className=" w-fit mx-auto shadow-md bg-cyan-100 rounded-xl text-xl shadow-cyan-200 p-1"> Final Price :₹ {finalPrice} </div>
                                        </div>
                                </div>
                            )}
                        </div>
                        {!!cartProducts?.length && (
                            <div className="max-h-min">
                            < div className="bg-white border-2 border-black rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-4">Order Information</h2>

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
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        name="email"
                                        onChange={ev => setEmail(ev.target.value)}
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
                                <button onClick={goToPayment}
                                    className="bg-black text-white border-0 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800"
                                >
                                    Continue to payment
                                </button>

                            </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>

        );
    }
    return (
        <div></div>
    );
};

export default Cart;
