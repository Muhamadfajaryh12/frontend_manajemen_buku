import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await fetch(`${url}`);
      const response = await result.json();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  const removeData = (id) => {
    setData((prev) => ({
      ...prev,
      data: prev["data"].filter((item) => item.id != id),
    }));
  };
  return { data, loading, removeData };
};

export default useFetch;
