import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slice/modal";
import { fetchProduct } from "../redux/slice/product";
import { useEffect } from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.modal.productId);
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return (
    <>
      <div className="fixed top-0 w-screen h-screen">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-4 bg-white w-[480px] text-gray-900 rounded">
          <h1>This is modal for product number - {id}</h1>
          <p>{product.name}</p>
          <p>{product.color}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <div className="mt-4">
            <button
              className="bg-red-200 rounded px-4 py-1"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
