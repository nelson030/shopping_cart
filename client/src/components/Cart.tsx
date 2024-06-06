import { useEffect, useState } from "react";
import { CartItemType } from '../types/index'
import CartItem from './CartItem'

interface CartProps {
  items: CartItemType[]
}

const Cart = ({ items }: CartProps) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const newTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
      setTotal(newTotal)
    }, [items])

    return (
        <header>
          <h1>The Shop!</h1>
          <div className="cart">
            <h2>Your Cart</h2>
            <table className="cart-items">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => <CartItem item={item}/>)}
              </tbody>
              <tfoot>
                <tr>
                  <td col-span="3" className="total">Total: ${total}</td>
                </tr>
              </tfoot>
            </table>
            <div className="checkout-button">
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </header>
    )
}

export default Cart