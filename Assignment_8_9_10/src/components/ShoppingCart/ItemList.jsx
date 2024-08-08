import React from 'react';

function ItemList({ items, onAddToCart }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Items</h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm">Price: Rs.{item.price}</p>
            <button
              className="btn btn-primary mt-2"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
