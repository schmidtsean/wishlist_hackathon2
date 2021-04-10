import React, { useState } from 'react';
import axios from 'axios';

export const WishlistContext = React.createContext();

export const WishlistConsumer = WishlistContext.Consumer;

const userId = ( User.all )

const WishlistProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([])
 


  const addWishlist = (wishlist, userId) => {
    axios.post(`/api/users/${userId}/wishlist`, { wishlist })
      .then( res => {
        setWishlists([...wishlists, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateWishlist = (id, wishlist, userId) => {
    axios.put(`/api/users/${userId}/wishlist/`, { wishlist })
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

  const deleteWishlist = (id, user) => {
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