import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";
import Loading from "../component/common/Loading";

const BookDetailPage = () => {
  const path = useParams();
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/book/${path.id}`,
  );
  if (loading) return <Loading />;
  if (!data) return <h1>Buku tidak ditemukan</h1>;
  return (
    <div>
      <h1 className="font-bold text-3xl">{data?.book_name}</h1>
      <p className="text-gray-500 text-sm">
        {data?.author} |{" "}
        {new Date(data?.published_date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <p className="text-justify mt-4">{data?.description}</p>
    </div>
  );
};

export default BookDetailPage;
