import React from "react";

const TextInput = ({ label, type, required, error, ...props }) => {
  return (
    <div className="w-full my-2">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className="border border-gray-200 p-2 w-full block "
        {...props}
      />
      {required && error && (
        <p className="text-xs text-red-600">Wajib Diisi !</p>
      )}
    </div>
  );
};

export default TextInput;
