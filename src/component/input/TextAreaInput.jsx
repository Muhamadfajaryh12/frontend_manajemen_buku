import React from "react";

const TextAreaInput = ({ label, required, error, ...props }) => {
  return (
    <div className="w-full my-2">
      <label htmlFor="">{label}</label>
      <textarea
        className="border border-gray-200 p-2 w-full block "
        {...props}
      />
      {required && error && (
        <p className="text-xs text-red-600">Wajib Diisi !</p>
      )}
    </div>
  );
};

export default TextAreaInput;
