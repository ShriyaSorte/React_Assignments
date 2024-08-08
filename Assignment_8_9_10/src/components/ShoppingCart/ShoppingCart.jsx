import React, { useState } from 'react';
import ItemList from './ItemList';
import CartSummary from './CartSummary';

const initialItems = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 150 },
  { id: 3, name: 'Item 3', price: 200 },
];

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-5 text-center">Shopping Cart</h1>
      <ItemList items={initialItems} onAddToCart={handleAddToCart} />
      <CartSummary cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default ShoppingCart;
