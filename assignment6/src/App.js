import React, { useState } from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import DynamicMenu from './components/DynamicMenu';
import Gallery from './components/Gallery';
import ContactList from './components/ContactList';
import ShoppingCart from './components/ShoppingCart';

const menuItems = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Services' },
  { id: 4, label: 'Contact' }
];
// aaa
const imageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150'
];

const contacts = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
];

function App() {
  const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [cartItem, setCartItem] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const addToCart = () => {
    if (cartItem.trim()) {
      setCart([...cart, cartItem]);
      setCartItem('');
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Combined Features App</h1>
      
      <DynamicMenu items={menuItems} />

      <div className="section">
        <h2>Todo List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <TodoList todos={todos} onRemove={removeTodo} />
      </div>

      <div className="section">
        <h2>Image Gallery</h2>
        <Gallery images={imageUrls} />
      </div>

      <div className="section">
        <h2>Contact List</h2>
        <ContactList contacts={contacts} />
      </div>

      <div className="section">
        <h2>Shopping Cart</h2>
        <input
          type="text"
          value={cartItem}
          onChange={(e) => setCartItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addToCart}>Add to Cart</button>
        <ShoppingCart items={cart} onRemove={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
