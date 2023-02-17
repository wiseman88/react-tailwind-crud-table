import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "/src/redux/slice/product";
import styles from "../../styles/styles.module.css";

const Form = (props) => {
  const categories = useSelector((state) => state.product.categories);
  const colors = useSelector((state) => state.product.colors);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    color: colors[0],
    category: categories[0],
    price: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((values) => ({ ...values, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));
  };

  return (
    <div id="form" className="w-[480px] mx-auto mt-6">
      <form action="#" className="p-6 bg-white rounded-md" onSubmit={submit}>
        <div className="mb-6">
          <label htmlFor="product name" className={styles.label}>
            Product Name
          </label>
          <input
            type="text"
            id="product"
            name="name"
            className={styles.input}
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="color" className={styles.label}>
            Select color
          </label>
          <select
            id="color"
            name="color"
            className={styles.input}
            onChange={handleChange}
            value={form.color}
          >
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="category" className={styles.label}>
            Select category
          </label>
          <select
            id="categories"
            name="category"
            className={styles.input}
            onChange={handleChange}
            value={form.category}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className={styles.input}
            onChange={handleChange}
            value={form.price}
          />
        </div>
        <button className={styles.button}>add product</button>
      </form>
    </div>
  );
};

export default Form;
