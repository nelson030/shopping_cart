import InventoryItem from './InventoryItem'
import { InventoryItemType } from '../types/index'

interface InventoryListProps {
    inventory: InventoryItemType[];
    onShowEditForm: () => void;
    onEditSubmit: (product: InventoryItemType) => void;
    onDeleteProduct: (product: InventoryItemType) => void;
    onAddToCart: (productId: string) => void;
}

const InventoryList = ({ inventory, onAddToCart, onShowEditForm, onEditSubmit, onDeleteProduct }: InventoryListProps) => {
    return (
        <ul className="product-list" key='1'>
            {inventory.map((product) => <InventoryItem onAddToCart={onAddToCart} product={product} onDeleteProduct={onDeleteProduct} onEditProduct={onShowEditForm} onEditSubmit={onEditSubmit}/>)}
        </ul>
    )
}

export default InventoryList