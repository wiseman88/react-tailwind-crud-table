import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slice/modal";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed top-0 w-screen h-screen">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-4 bg-white w-[480px] text-gray-900 rounded">
          <h1>This is modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            earum neque veritatis sequi recusandae. Aliquid sed quae distinctio
            veniam adipisci minus nobis omnis quas totam beatae, culpa aliquam
            ratione dolores dignissimos asperiores, officia corporis voluptates
            velit ullam reiciendis voluptatem? Minus magnam possimus quod?
            Perspiciatis voluptatibus architecto eum nobis, illo ducimus quam
            tempora amet neque vero totam autem mollitia provident. Porro velit
            nobis dicta laudantium doloremque obcaecati fugiat earum consectetur
            assumenda necessitatibus voluptatibus, veniam fugit. Quod corporis
            necessitatibus natus officia dolorem nulla dicta dolores pariatur,
            earum voluptate repellat eius iste sapiente tempore doloremque sint
            qui nam! Repudiandae quasi delectus nesciunt!
          </p>
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
