import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (url) => {
const [products, setProducts] = useState([]);
const [loader, setLoader] = useState(true);
const [error, setError] = useState(false);

const fetchProducts = async () => {
try {
  const response = await axios.get(url);
  setProducts(response.data);
  setLoader(false);
} catch (error) {
  setError(true);
  setLoader(false);
}
};

useEffect(() => {
fetchProducts();
}, [url]);



const refreshProducts = () => {
fetchProducts();
};

return {
products,
loader,
error,
refreshProducts
};
};

export default useProducts;