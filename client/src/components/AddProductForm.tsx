import { useState } from "react"
import { FormInventoryItemType } from "../types";

interface AddProductFormProps {
    onSubmit: (product: FormInventoryItemType, callback?: () => void) => void;
}

const AddProductForm = ({ onSubmit }: AddProductFormProps) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")

    const resetInputs = () => {
        setTitle("")
        setPrice("")
        setQuantity("")
    }

    const handleSubmitAddProduct = (e: React.SyntheticEvent) => {
        e.preventDefault
        const numPrice = Number(price)
        const numQuantity = Number(quantity)
        onSubmit({title, price: numPrice, quantity: numQuantity}, resetInputs)
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmitAddProduct}>
                <div className="input-group">
                    <label htmlFor="product-name">Product Name:</label>
                    <input
                    type="text"
                    id="product-name"
                    name="product-name"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="product-price">Price:</label>
                    <input
                    type="number"
                    id="product-price"
                    name="product-price"
                    min="0"
                    step="0.01"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="product-quantity">Quantity:</label>
                    <input
                    type="number"
                    id="product-quantity"
                    name="product-quantity"
                    min="0"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    />
                </div>
                <div className="actions form-actions">
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm