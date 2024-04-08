import { addItemToCart, updateCartItem, deleteCartItem } from './cartPost';
import { getAllItemsFromUserCart, getCartItemById } from './getFromCart';
const controllers = {
  addItemToCart,
  getAllItemsFromUserCart,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};

export default controllers;
