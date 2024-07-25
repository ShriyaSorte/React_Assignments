import { useEffect, useState } from 'react';
import './App.css'
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Greeting from './components/Greeting';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    const storedUsers = localStorage.getItem('users');
    if(storedUsers){
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleRegister = (username) => {
    if (username.trim() === '') {
      toast.error('Username is required for registration.');
      return;
    }
    const newUser = {username};
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setIsRegistered(true);
    toast.success('Registered successfully!');
  };

  const handleLogin = (username) => {
    if (username.trim() === '') {
      toast.error('Username is required for login.');
      return;
    }
    const userExists = users.some(user => user.username === username);
    if(userExists) {
      setIsLoggedIn(true);
      setUsername(username);
      toast.success('Logged in successfully!');
    }
    else {
      toast.error('User not found');      
      setIsRegistered(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    toast.info('Logged out successfully.');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    toast.info(`Switched to ${newTheme} mode.`);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} username={username} />
      {!isRegistered && <Register onRegister={handleRegister}/>}
      {isRegistered && !isLoggedIn && <Login onLogin={handleLogin}/>}
      {isRegistered && isLoggedIn && <Card onLogout={handleLogout}/>}
      <ToastContainer autoClose={2000}/>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme}/>
    </>
  );
}

export default App;
