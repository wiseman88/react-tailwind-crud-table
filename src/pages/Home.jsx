import React from "react";
import Form from "../components/product/Form";
import Table from "../components/product/table/Table";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

export const Home = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  return (
    <>
      <Form />
      <Table />
      {showModal && <Modal />}
    </>
  );
};
