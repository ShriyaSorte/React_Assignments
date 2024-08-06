import { useParams } from 'react-router-dom';

const products = [
  { id: '1', name: 'Product 1', description: 'Used for drinking' },
  { id: '2', name: 'Product 2', description: 'Used for carrying food' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
