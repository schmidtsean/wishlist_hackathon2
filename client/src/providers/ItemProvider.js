import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ItemContext = React.createContext();

export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  useEffect( () => {
    axios.get('/api/users/${match.params.id**')
      .then( res => setItemss(res.data))
      .catch( err => console.log(err))
  }, [])

  const addItem = (item) => {
    axios.post('/api/users/***/wishlist', { item })
      .then( res => {
        setItems([...items, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateItem = (id, item) => {
    axios.put(`/api/users/${id}/wishes`, { item })
      .then(res => {
        const updatedItems = items.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setItems(updatedItems)
      })
  }

  const deleteItem = (id) => {
    axios.delete(`/api/users/${user.id}/items/${id}`)
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