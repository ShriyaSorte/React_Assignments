import React from 'react';

function CartSummary({ cartItems, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-disc list-inside">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>
                {item.name} - Rs.{item.price} x {item.quantity}
              </span>
              <button
                className="btn btn-error btn-xs"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right">
        <span className="font-bold">Total: Rs.{totalPrice}</span>
      </div>
    </div>
  );
}

export default CartSummary;
