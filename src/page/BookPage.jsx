import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import BookCard from "../component/card/BookCard";
import Search from "../component/common/Search";
import { Link } from "react-router";
import Loading from "../component/common/Loading";

const BookPage = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const handleSearch = (value) => {
    setKeyword(value);
  };
  const { data, loading, removeData } = useFetch(
    `${import.meta.env.VITE_API_URL}/book?search=${keyword}&page=${page}&limit=${limit}`,
  );

  const handleChangeLimit = (value) => {
    setLimit(value);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="flex justify-end my-5">
        <Link
          to="/form"
          className="bg-green-500 p-2 rounded-sm  text-white mt-5"
        >
          Tambah Buku
        </Link>
      </div>
      <div>
        <label htmlFor="limit" className="text-sm block">
          Tampilan{" "}
        </label>

        <select
          className="border border-gray-200 p-2"
          name="limit"
          onChange={(e) => handleChangeLimit(e.target.value)}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
      {loading ? (
        <Loading />
      ) : data?.data.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-2 mt-10">
            {data?.data?.map((item) => (
              <BookCard data={item} key={item.id} onDelete={removeData} />
            ))}
          </div>
          <div className="flex gap-2 mt-10">
            {Array.from({ length: data?.total_page || 0 }, (_, index) => (
              <button
                className={`p-2 w-14 text-sm text-white rounded-sm ${index + 1 == page ? "bg-blue-500" : "bg-blue-200"}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center mt-5 text-2xl">Buku tidak ditemukan </h1>
      )}
    </div>
  );
};

export default BookPage;
