export interface InventoryItemType {
    _id: string;
    title: string;
    quantity: number;
    price: number;
}

export interface FormInventoryItemType extends Omit<InventoryItemType, "_id"> {}

export interface CartItemType extends InventoryItemType {}

export interface NewCartItemType {
    item: CartItemType;
    product: InventoryItemType;
}