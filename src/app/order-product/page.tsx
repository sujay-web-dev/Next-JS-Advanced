"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.forward()
        // router.back()
        // router.replace("/")
        // router.push("/")
    }

    return (
    <>
    <h1>Order Product</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
    )
}