import axios from "axios";
import { FormInventoryItemType, InventoryItemType } from "../types";
import { z } from "zod";

const inventoryItemSchema = z.object({
    _id: z.string(),
    title: z.string(),
    price: z.number(),
    quantity: z.number()
});

const getInventoryItemSchema = z.array(inventoryItemSchema);
const deleteInventoryItemSchema = z.string()


export const getAllInventoryItems = async (): Promise<InventoryItemType[]> => {
    const { data } = await axios.get<{ data: InventoryItemType[] }>("/api/products");
    return getInventoryItemSchema.parse(data);
}

export const postNewInventoryItem = async (product: FormInventoryItemType): Promise<InventoryItemType> => {
    const { data } = await axios.post<{ data: InventoryItemType }>("/api/products", product);
    return inventoryItemSchema.parse(data);
}

export const updateInventoryItem = async (product: InventoryItemType): Promise<InventoryItemType> => {
    const { data } = await axios.put<{ data: InventoryItemType }>(`/api/products/${product._id}`, product);
    return inventoryItemSchema.parse(data);
}

export const deleteInventoryItem = async (product: InventoryItemType): Promise<string> => {
    const { data } = await axios.delete<{ data: string }>(`/api/products/${product._id}`);
    console.log('data:', data)
    console.log('datatype', Object.getPrototypeOf(data))
    return deleteInventoryItemSchema.parse(data);
}