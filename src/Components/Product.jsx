import { useState } from "react";
export default function Product({ img, priceOptions, product, quantity }) {
  const [quauntityCount, setQuantityCount] = useState({
    quantity,
    priceOptions: priceOptions[0],
  });
  return (
    <div>
      <h3>{product} </h3>
      <img src={img} alt={product} height="100px" />
      <p>
        Price:
        {
          <select
            value={quantity.priceOptions}
            onChange={(e) =>
              setQuantityCount((prevQuantity) => {
                return {
                  ...prevQuantity,
                  priceOptions: parseFloat(e.target.value),
                };
              })
            }
          >
            {priceOptions.map((price, index) => (
              <option key={index} value={price}>
                {price.toFixed(2)}
              </option>
            ))}
          </select>
        }
      </p>
      <p> Quantity:{quauntityCount.quantity} </p>
      <button
        onClick={() => {
          setQuantityCount((prevQuantity) => {
            return { ...prevQuantity, quantity: prevQuantity.quantity + 1 };
          });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setQuantityCount((prevQuantity) => {
            return prevQuantity.quantity > 0
              ? { ...prevQuantity, quantity: prevQuantity.quantity - 1 }
              : { ...prevQuantity, quantity: 0 };
          });
        }}
      >
        Remove
      </button>
      <p style={{ color: "green" }}>
        <b>
          Total:
          {(quauntityCount.priceOptions * quauntityCount.quantity).toFixed(
            2
          )}{" "}
        </b>
      </p>
    </div>
  );
}
