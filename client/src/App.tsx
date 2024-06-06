import './App.css'
import Cart from './components/Cart'
import InventoryList from './components/InventoryList'
import AddProductForm from './components/AddProductForm'
import { CartItemType, FormInventoryItemType, InventoryItemType } from './types/index'
import { useEffect, useState } from 'react'
import { getAllInventoryItems, postNewInventoryItem, updateInventoryItem, deleteInventoryItem } from './services/products'
import { getAllCartItems, postNewCartItem } from './services/cart'

function App() {
  const [showAddProductForm, setShowAddProductForm] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [inventoryItems, setInventoryItems] = useState<InventoryItemType[]>([])


  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const items = await getAllInventoryItems()
        setInventoryItems(items)
      } catch (e) {
        console.error(e)
      }
    }

    fetchInventory()
  }, [cartItems])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getAllCartItems()
        setCartItems(items)
      } catch (e) {
        console.error(e)
      }
    }

    fetchCart()
  }, [cartItems])

  // const cartItems: CartItemType[] = [{_id: "1",title: 'Amazon Kindle E-reader', quantity: 2 , price: 79.99}, {_id: '2',title: 'Apple 10.5-Inch iPad Pro', quantity: 1 , price: 649.99}]
  // const inventoryItems: InventoryItemType[] = [{id: 1,name: 'Amazon Kindle E-reader', quantity: '5' , price: '79.99'}, {id: 2,name: 'Apple 10.5-Inch iPad Pro', quantity: '2' , price: '649.99'}, {id: 3,name: 'Yamaha Portable Keyboard', quantity: '0' , price: '550.99'}]

  const handleShowAddProductForm = () => {
    setShowAddProductForm(true)
  }

  const handleShowEditProductForm = () => {
    console.log("Show Edit Form")
  }

  const handleAddToCart = async (productId: string) => {
    try {
      const data = await postNewCartItem(productId)
      // setCartItems()
      // if (callback) callback()
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteProduct = async (product: InventoryItemType) => {
    try {
      await deleteInventoryItem(product)
      setInventoryItems((prevItems) => prevItems.filter((p) => p._id !== product._id))
      // if (callback) callback()
    } catch (e) {
      console.error(e)
    }
  }

  const handleEditFormSubmit = async (product: InventoryItemType, callback?: () => void) => {
    try {
      const editedProduct = await updateInventoryItem(product)
      setInventoryItems((prevItems) => prevItems.map((p) => (p._id === editedProduct._id ? editedProduct : p)))
      if (callback) callback()
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmitAddProduct = async (product: FormInventoryItemType, callback?: () => void) => {
    try {
      const newProduct = await postNewInventoryItem(product)
      setInventoryItems((prevItems) => {
        prevItems.push(newProduct)
        return prevItems
      })
      if (callback) callback()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div id="app">
        <Cart items={cartItems}/>
        <main>
          <div className="product-listing">
            <h2>Products</h2>
            <InventoryList inventory={inventoryItems} onAddToCart={handleAddToCart} onDeleteProduct={handleDeleteProduct} onShowEditForm={handleShowEditProductForm} onEditSubmit={handleEditFormSubmit}/>
            {showAddProductForm === false ? (
              <p>
                <button className="add-product-button" onClick={e => {
                  e.preventDefault()
                  handleShowAddProductForm()
                }}>Add A Product</button>
              </p>
            ) : <AddProductForm onSubmit={handleSubmitAddProduct} />}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
