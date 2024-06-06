import { CartItemType } from "../types"

interface CartItemProps {
    item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
    return (
        <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
        </tr>
    )
}

export default CartItem