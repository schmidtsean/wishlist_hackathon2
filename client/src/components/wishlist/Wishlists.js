// import { Component } from "react";
// import axios from "axios";
// import WishlistForm from "../wishlist/WishlistForm";
// import Wishlist from "./Wishlist";

// class Wishlists extends Component {
//   state = { Wishlists: [] };

//   componentDidMount() {
//     const { itemId } = this.props;
//     axios
//       .get(`/api/items/${itemId}/wishlists`)
//       .then((res) => {
//         this.setState({ wishlists: res.data });
//       })
//       .catch((err) => console.log(err));
//   }
//   addWishlist = (wishlist) => {
//     const { itemId } = this.props;
//     axios
//       .post(`/api/items/${itemId}/wishlists/`, { wishlist })
//       .then((res) => {
//         const { wishlists } = this.state;
//         this.setState({ wishlists: [...wishlists, res.data] });
//       })
//       .catch((err) => console.log(err));
//   };
//   updateWishlist = (id, wishlist) => {
//     const { itemId } = this.props;
//     axios
//       .put(`/api/items/${itemId}/wishlists/${id}`, { wishlist })
//       .then((res) => {
//         const wishlists = this.state.wishlists.map((c) => {
//           if (c.id === id) {
//             return res.data;
//           }
//           return c;
//         });
//         this.setState({ wishlists });
//       })
//       .catch((err) => console.log(err));
//   };
//   deleteWishlist = (id) => {
//     const { itemId } = this.props;
//     axios
//       .delete(`/api/items/${itemId}/wishlists/${id}`)
//       .then((res) => {
//         const { wishlists } = this.state;
//         this.setState({ wishlists: wishlists.filter((c) => c.id !== id) });
//       })
//       .catch((err) => console.log(err));
//   };
//   render() {
//     const { wishlists } = this.state;
//     return (
//       <>
//         <h2>Wishlists</h2>
//         <h4>Add a Wishlist</h4>
//         <WishlistForm addWishlist={this.addWishlist} />
       
//         {wishlists.map((c) => (
//           <Wishlist
//             key={c.id}
//             {...c}
//             deleteWishlist={this.deleteWishlist}
//             updateWishlist={this.updateWishlist}
//           />
//         ))}
//       </>
//     );
//   }
// }
// export default Wishlists;