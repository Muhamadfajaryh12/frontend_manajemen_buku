import React from "react";
import FormBookCreate from "../component/form/FormBookCreate";
import BreadCrumb from "../component/common/BreadCrumb";
import FormBookUpdate from "../component/form/FormBookUpdate";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Loading from "../component/common/Loading";

const FormBookPage = () => {
  const path = useParams();
  const { data, loading } = useFetch(
    path.id ? `${import.meta.env.VITE_API_URL}/book/${path.id}` : null,
  );

  return (
    <div>
      <BreadCrumb title={["Manajemen Buku", "'Formulir"]} />
      {path.id ? (
        loading ? (
          <Loading />
        ) : (
          <FormBookUpdate data={data} />
        )
      ) : (
        <FormBookCreate />
      )}
    </div>
  );
};

export default FormBookPage;
