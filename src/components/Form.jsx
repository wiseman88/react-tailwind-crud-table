import { useState } from "react";
import { addProduct } from "../store";
import { useDispatch } from "react-redux";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    color: "White",
    category: "Laptop",
    price: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((values) => ({ ...values, [name]: value }));
  };

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addProduct(form));
  };

  return (
    <section id="form" className="w-[480px] mx-auto mt-6">
      <form action="#" className="p-6 bg-white rounded-md" onSubmit={submit}>
        <div className="mb-6">
          <label
            htmlFor="product name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select color
          </label>
          <select
            id="color"
            name="color"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={handleChange}
            value={form.color}
          >
            <option>White</option>
            <option>Silver</option>
            <option>Black</option>
            <option>Brown</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select category
          </label>
          <select
            id="categories"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={handleChange}
            value={form.category}
          >
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
            <option value="Tablet">Tablet</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={handleChange}
            value={form.price}
          />
        </div>
        <button className="w-full p-2 rounded bg-gray-900 hover:bg-gray-700 text-white">
          add product
        </button>
      </form>
    </section>
  );
};

export default Form;
