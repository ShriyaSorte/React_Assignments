import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Bottle', description: 'Used for drinking' },
  { id: '2', name: 'Tiffin', description: 'Used for carrying food' },
];

function ProductCatalog() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
