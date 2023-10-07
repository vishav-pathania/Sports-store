import { useSession, signIn, signOut } from "next-auth/react"
import Signin from "../components/Signin"
import Link from "next/link"

const Cart = ()=> {
    const { data: session } = useSession({required: true})
    if(session){
        return (
            <div>
                <h1>Cart</h1>
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Cart