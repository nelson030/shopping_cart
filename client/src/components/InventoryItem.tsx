import { useState } from 'react';
import { InventoryItemType } from '../types/index'
import EditProductForm from './EditProductForm'

interface InventoryItemProps {
    product: InventoryItemType;
    onEditProduct: () => void;
    onEditSubmit: (product: InventoryItemType) => void;
    onDeleteProduct: (product: InventoryItemType) => void;
    onAddToCart: (productId: string) => void;
}

const InventoryItem = ({ product, onAddToCart, onEditProduct, onEditSubmit, onDeleteProduct }: InventoryItemProps) => {
    const [showEditProductForm, setShowEditProductForm] = useState(false)

    const handleShowEditProductForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onEditProduct()
        toggleEditForm()
    }

    const toggleEditForm = () => {
        setShowEditProductForm((prevState: boolean) => prevState === true ? false : true)
    }

    const handleClickDeleteProduct = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onDeleteProduct(product)
    }

    const handleAddToCart = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onAddToCart(product._id)
    }

    return (
        <li className="product" key={product._id}>
            <div className="product-details">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="quantity">{product.quantity} left in stock</p>
                <div className="actions product-actions">
                    <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                    <button className="edit" onClick={handleShowEditProductForm}>Edit</button>
                </div>
                <button className="delete-button" onClick={handleClickDeleteProduct}><span>X</span></button>
            </div>
            { showEditProductForm === true ? <EditProductForm toggleEditForm={toggleEditForm} initialProduct={product} onEditSubmit={onEditSubmit}/> : null }
        </li>
    )
}

export default InventoryItem