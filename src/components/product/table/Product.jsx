import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "/src/redux/slice/product";
import { openModal } from "/src/redux/slice/modal.js";
import { useEffect } from "react";

const Product = () => {
  const classes = {
    productRow: "bg-white border-b",
    productName: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
    productTd: "px-6 py-4",
    btnEdit:
      "font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6",
    btnDelete: "font-medium text-red-600 dark:text-red-500 hover:underline",
  };

  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products.map((product, index) => (
        <tr key={index} className={classes.productRow}>
          <th scope="row" className={classes.productName}>
            {product.name}
          </th>
          <td className={classes.productTd}>{product.color}</td>
          <td className={classes.productTd}>{product.category}</td>
          <td className={classes.productTd}>${product.price}</td>
          <td className={classes.productTd}>
            <button
              className={classes.btnEdit}
              onClick={() => dispatch(openModal(product.id))}
            >
              Edit
            </button>
            <button
              className={classes.btnDelete}
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Product;
