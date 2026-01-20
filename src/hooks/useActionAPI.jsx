import React from "react";
import toast from "react-hot-toast";

export const useActionAPI = () => {
  const handleAPI = ({ url, method, data, handleAction, onSuccess }) => {
    const options = {
      method: method,
      headers: {},
    };

    if (data) {
      options.headers["Content-type"] = "application/json";
      options.body = JSON.stringify(data);
    }

    const result = fetch(url, options).then(async (res) => {
      const response = await res.json();
      if (!res.ok) {
        throw new Error(response.message);
      }
      return response;
    });

    toast.promise(result, {
      loading: "Loading",
      success: (response) => {
        handleAction?.(response);
        onSuccess?.();
        return response.message;
      },
      error: (err) => {
        return err.message;
      },
    });
  };
  return {
    handleAPI,
  };
};
