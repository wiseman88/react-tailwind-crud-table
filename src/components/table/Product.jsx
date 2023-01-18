const Product = () => {
  const classes = {
    productRow: "bg-white border-b",
    productName: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
    productTd: "px-6 py-4",
    btnEdit:
      "font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6",
    btnDelete: "font-medium text-red-600 dark:text-red-500 hover:underline",
  };
  const products = [
    {
      name: 'Apple MacBook Pro 18"',
      color: "White",
      category: "Laptop",
      price: "1599",
    },
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "2999",
    },
  ];
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
            <a href="#" className={classes.btnEdit}>
              Edit
            </a>
            <a href="#" className={classes.btnDelete}>
              Delete
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Product;
