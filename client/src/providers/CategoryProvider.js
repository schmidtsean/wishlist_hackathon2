import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CategoryContext = React.createContext();

export const CategoryConsumer = CategoryContext.Consumer;

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect( () => {
    axios.get('/api/categories')
      .then( res => setCategories(res.data))
      .catch( err => console.log(err))
  }, [])

  const addCategory = (category) => {
    axios.post('/api/categories', { category })
      .then( res => {
        setCategories([...categories, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateCategory = (id, category) => {
    axios.put(`/api/categories/${id}`, { category })
      .then(res => {
        const updatedCategories = categories.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCategories(updatedCategories)
      })
  }

  const deleteCategory = (id) => {
    axios.delete(`/api/categories/${id}`)
      .then( res => {
        setTacos(categories.filter(c => c.id !== id))
      })
  }

  return(
    <CategoryContext.Provider value={{
      categories,
      addCategory: addCategory,
      updateCategory: updateCategory,
      deleteCategory: deleteCategory,
    }}>
      { children }
    </CategoryContext.Provider>
  )
}

export default CategoryProvider;