import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDoList";
import DynamicMenu from "./components/DynamicMenu";
import Gallery from "./components/Gallery";
import ContactList from "./components/ContactList";
import ShoppingCart from "./components/ShoppingCart";

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Services" },
  { id: 4, label: "Contact" },
];

const imageUrls = [
  "https://c1.wallpaperflare.com/preview/810/984/881/sunset-square-profile-picture-photo-pretty.jpg",
  "https://i.pinimg.com/originals/2a/14/db/2a14db4b9860dcedc6e015943c2b5099.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi-vLP25q_vjS2-x07hnSt1vgzYbqpRelog&s",
];

const contacts = [
  {
    name: "Shriya Sorte",
    phone: "+91 8551929956",
    email: "shriyasorte@gmail.com",
  },
  {
    name: "Ajitesh Sorte",
    phone: "+91 7276246463",
    email: "sorteajitesh@gmail.com",
  },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [cartItem, setCartItem] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const addToCart = () => {
    if (cartItem.trim()) {
      setCart([...cart, cartItem]);
      setCartItem("");
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Assignment 6</h1>

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
        /><br/><br/>
        <button onClick={addToCart}>Add to Cart</button>
        <ShoppingCart items={cart} onRemove={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
