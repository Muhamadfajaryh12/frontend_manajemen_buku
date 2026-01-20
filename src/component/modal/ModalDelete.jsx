import React from "react";
import { useModal } from "../../context/ModalContext";
import { CiWarning } from "react-icons/ci";

const ModalDelete = ({ title, onDelete }) => {
  const { closeModal } = useModal();
  return (
    <div
      className="bg-white p-8 rounded-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <CiWarning size={50} className="mx-auto text-red-500" />
      <h1 className="my-5">
        Anda yakin ingin menghapus buku{" "}
        <span className="font-bold">{title}</span>?
      </h1>
      <div className="flex gap-2  justify-center items-center">
        <button
          className="bg-red-500 text-white p-2 rounded-sm w-32 hover:bg-red-600"
          onClick={closeModal}
        >
          Batal
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-sm w-32 hover:bg-blue-600"
          onClick={onDelete}
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
