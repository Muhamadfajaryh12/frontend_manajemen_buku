import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useActionAPI } from "../../hooks/useActionAPI";
import TextInput from "../input/TextInput";
import TextAreaInput from "../input/TextAreaInput";

const FormBookUpdate = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { handleAPI } = useActionAPI();

  const handleInsertBook = (value) => {
    handleAPI({
      url: `${import.meta.env.VITE_API_URL}/book/${data.id}`,
      data: { description: value.description },
      method: "PATCH",
    });
  };
  useEffect(() => {
    if (data) {
      setValue("book_name", data.book_name);
      setValue("author", data.author);
      setValue("description", data.description);
      if (data.published_date) {
        const date = new Date(data.published_date);
        setValue("published_date", date.toISOString().split("T")[0]);
      }
    }
  }, [data]);

  return (
    <div className="border border-gray-200 p-4 rounded-md mt-5">
      <form onSubmit={handleSubmit(handleInsertBook)}>
        <TextInput
          type="text"
          label={"Nama Buku"}
          {...register("book_name")}
          name="book_name"
          readOnly
        />
        <TextInput
          type="text"
          label={"Penulis"}
          {...register("author")}
          name="author"
          readOnly
        />
        <TextAreaInput
          label={"Deskripsi"}
          {...register("description", { required: true })}
          name="description"
          error={errors.description}
        />{" "}
        <TextInput
          type="date"
          label={"Tanggal Rilis"}
          {...register("published_date")}
          name="published_date"
          readOnly
        />
        <button className="bg-blue-500 my-2 p-2 rounded-sm w-full text-white">
          Simpan{" "}
        </button>
      </form>
    </div>
  );
};

export default FormBookUpdate;
