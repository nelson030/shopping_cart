I had specific questions on how I passed around event handling functions. 
I tried keeping everything in the App.tsx file.
Specifically I'm curious what would be the best way to pass around the `handleShowEditProductForm` function
- intialized on line 49 in App.tsx
- passed from App.tsx to InventoryList.tsx to InventoryItem.tsx
- InventoryItem.tsx has its' own 

A question I had on that event handling specifically is how to handle the state of the `showEditProductForm`
- I decided to create the `toggleEditForm` and pass that down to the child component EditProductForm.tsx
- Just curious if there is a better / more optimal way to approach that event

Also, I set the screen to re-render on each add to cart. I just didn't have time to mess with setting the state
after the post request.