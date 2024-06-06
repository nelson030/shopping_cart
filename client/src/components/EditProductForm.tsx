import { useState } from "react"
import { InventoryItemType } from '../types/index'

interface EditProductFormProps {
    initialProduct: InventoryItemType;
    onEditSubmit: (product: InventoryItemType) => void;
    toggleEditForm: () => void;
}

const EditProductForm = ({ initialProduct, onEditSubmit, toggleEditForm }: EditProductFormProps) => {
    const [title, setTitle] = useState(initialProduct.title)
    const [price, setPrice] = useState(initialProduct.price)
    const [quantity, setQuantity] = useState(initialProduct.quantity)
    const _id = initialProduct._id

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const numPrice = Number(price)
        const numQuantity = Number(quantity)
        onEditSubmit({ _id, title, price: numPrice, quantity: numQuantity })
    }

    return (
        <div className="edit-form">
            <h3>Edit Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                    type="text"
                    id="product-name"
                    value={title}
                    aria-label="Product Name"
                    onChange={(e) => {
                        e.preventDefault()
                        setTitle(e.target.value)
                    }}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="product-price">Price</label>
                    <input
                    type="number"
                    id="product-price"
                    value={price}
                    aria-label="Product Price"
                    onChange={(e) => {
                        e.preventDefault()
                        setPrice(Number(e.target.value))
                    }}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="product-quantity">Quantity</label>
                    <input
                    type="number"
                    id="product-quantity"
                    value={quantity}
                    aria-label="Product Quantity"
                    onChange={(e) => {
                        e.preventDefault()
                        setQuantity(Number(e.target.value))
                    }}
                    />
                </div>

                <div className="actions form-actions">
                    <button type="submit">Update</button>
                    <button type="button" onClick={(e) => {
                        e.preventDefault()
                        toggleEditForm()
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProductForm