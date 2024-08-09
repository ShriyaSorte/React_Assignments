import useProduct from '../customHooks/UserProducts';


const ProductList = () => {
  const {
    products,
    loader,
    error,
    refreshProducts
  } = useProduct("https://fakestoreapi.com/products?limit=9");


  if (loader) return <span className="loading loading-spinner loading-lg items-center"></span>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      {products.length > 0 ? (
        <div className='bg-white'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 m-5 ">
            {products.map((elem) => (
              <div className="card card-compact shadow-xl m-5 " key={elem.id}>
                <figure className="flex justify-center">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="w-1/2 "
                  />
                </figure>
                <div className="card-body h-1/2">
                  <h2 className="card-title text-black">{elem.title}</h2>
                  <p>{elem.description}</p>
                  <h3 className="card-title text-black">Price : {'\u20B9'}{elem.price}</h3>
                  <div className="card-actions justify-end">
                   
                    <button
                      className="btn btn-ghost w-full text-black"
                      
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button className="btn btn-success" onClick={refreshProducts}>
          Refresh
        </button>
      )}
    </>
  );
};

export default ProductList;