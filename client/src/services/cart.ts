import axios from "axios";
import { CartItemType, NewCartItemType } from "../types";
import { z } from "zod";

const cartItemSchema = z.object({
    _id: z.string(),
    title: z.string(),
    price: z.number(),
    quantity: z.number()
});

const inventoryItemSchema = z.object({
    _id: z.string(),
    title: z.string(),
    price: z.number(),
    quantity: z.number()
});

const newItemInCartSchema = z.object({
    item: cartItemSchema,
    product: inventoryItemSchema
});

const getCartItemsSchema = z.array(cartItemSchema)

export const postNewCartItem = async (productId: string): Promise<NewCartItemType> => {
    const { data } = await axios.post<{ data: NewCartItemType }>("/api/add-to-cart", { productId });
    return newItemInCartSchema.parse(data);
}

export const getAllCartItems = async (): Promise<CartItemType[]> => {
    const { data } = await axios.get<{ data: CartItemType[] }>("/api/cart");
    return getCartItemsSchema.parse(data);
}