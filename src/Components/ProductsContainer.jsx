import Product from "./Product";
export default function ProductsContainer({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        // <Product
        //   img={product.img}
        //   quantity={product.quantity}
        //   priceOptins={product.priceOptins}
        //   product={product.product}
        // />
        // we can use spread operator here because img is as product.img and quantity is same as product.quantity and so on . below is better code for this
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
