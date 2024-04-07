import { addItemToCart, updateCartItem, deleteCartItem } from './cartPost';
import { getAllItemsFromCart, getCartItemById } from './getFromCart';
const controllers = {
  addItemToCart,
  getAllItemsFromCart,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};

export default controllers;
