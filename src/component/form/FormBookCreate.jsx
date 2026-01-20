import React from "react";
import TextInput from "../input/TextInput";
import { useForm } from "react-hook-form";
import { useActionAPI } from "../../hooks/useActionAPI";

const FormBookCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { handleAPI } = useActionAPI();

  const handleInsertBook = (value) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/book`,
      data: value,
      method: "POST",
      onSuccess: reset,
    });
  };
  return (
    <div className="border border-gray-200 p-4 rounded-md mt-5">
      <form onSubmit={handleSubmit(handleInsertBook)}>
        <TextInput
          type="text"
          label={"Nama Buku"}
          {...register("book_name", { required: true })}
          name="book_name"
          required={true}
          error={errors.book_name}
        />
        <TextInput
          type="text"
          label={"Penulis"}
          {...register("author", { required: true })}
          name="author"
          required={true}
          error={errors.author}
        />
        <TextInput
          type="text"
          label={"Deskripsi"}
          {...register("description", { required: true })}
          name="description"
          required={true}
          error={errors.description}
        />{" "}
        <TextInput
          type="date"
          label={"Tanggal Rilis"}
          {...register("published_date", { required: true })}
          name="published_date"
          required={true}
          error={errors.published_date}
        />
        <button className="bg-blue-500 my-2 p-2 rounded-sm w-full text-white">
          Simpan{" "}
        </button>
      </form>
    </div>
  );
};

export default FormBookCreate;
