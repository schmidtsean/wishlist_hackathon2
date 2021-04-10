import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ItemContext = React.createContext();

export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  useEffect( (category_id) => {
    axios.get(`/api/categories/${category_id}/items`)
      .then( res => setItems(res.data))
      .catch( err => console.log(err))
  }, [])

  const addItem = (item, wishlist_id) => {
    axios.post(`/api/wishlist/${wishlist_id}/items`, { item })
      .then( res => {
        setItems([...items, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateItem = (id, category_id, item) => {
    axios.put(`/api/categories/${category_id}/items/${id}`, { item })
      .then(res => {
        const updatedItems = items.map( i => {
          if (i.id === id) {
            return res.data
          }
          return i
        })
        setItems(updatedItems)
      })
  }

  const deleteItem = (id, category_id) => {
    axios.delete(`/api/categories/${category_id}/items/${id}`)
      .then( res => {
        setItems(items.filter(t => t.id !== id))
      })
  }

  return(
    <ItemContext.Provider value={{
      items,
      addItem: addItem,
      updateItem: updateItem,
      deleteItem: deleteItem,
    }}>
      { children }
    </ItemContext.Provider>
  )
}

export default ItemProvider;