import React from "react";
import { Link } from "react-router";
import { useModal } from "../../context/ModalContext";
import ModalDelete from "../modal/ModalDelete";
import { useActionAPI } from "../../hooks/useActionAPI";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const BookCard = ({ data, onDelete }) => {
  const { openModal, closeModal } = useModal();
  const { handleAPI } = useActionAPI();
  const handleDeleteBook = () => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/book/${data.id}`,
      method: "DELETE",
      handleAction: (res) => {
        closeModal();
        onDelete(res.data.id);
      },
    });
  };
  return (
    <div className="p-4 rounded-sm border border-gray-200 w-full">
      <h1 className="font-semibold m-0">{data.book_name}</h1>
      <p className="text-sm m-0">
        {" "}
        {data.author} |{" "}
        {new Date(data.published_date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div className="flex my-2 gap-2">
        <Link to={`/${data.id}`} className="bg-gray-200 p-2">
          <FaEye />
        </Link>
        <Link to={`/form/${data.id}`} className="bg-blue-500 p-2 rounded-sm">
          <FaPencilAlt className="text-white" />
        </Link>
        <button
          onClick={() =>
            openModal(
              <ModalDelete
                title={data.book_name}
                onDelete={handleDeleteBook}
              />,
            )
          }
          className="bg-red-500 p-2 rounded-sm"
        >
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
