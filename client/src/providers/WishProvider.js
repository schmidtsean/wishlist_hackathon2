import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WishlistContext = React.createContext();

export const WishlistConsumer = WishlistContext.Consumer;

const WishlistProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([])

  useEffect( () => {
    axios.get('/api/users/${match.params.id**')
      .then( res => setWishlists(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWishlist = (wishlist) => {
    axios.post('/api/users/***/wishlist', { wish })
      .then( res => {
        setWishlists([...wishlists, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateWishlist = (id, wishlist) => {
    axios.put(`/api/users/${id}/wishes`, { wishlist })
      .then(res => {
        const updatedWishlists = wishlists.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setWishlists(updatedWishlists)
      })
  }

  const deleteWishlist = (id) => {
    axios.delete(`/api/users/${user.id}/wishlists/${id}`)
      .then( res => {
        setWishlists(wishlists.filter(t => t.id !== id))
      })
  }

  return(
    <WishlistContext.Provider value={{
      wishlists,
      addWishlist: addWishlist,
      updateWishlist: updateWishlist,
      deleteWishlist: deleteWishlist,
    }}>
      { children }
    </WishlistContext.Provider>
  )
}

export default WishlistProvider;