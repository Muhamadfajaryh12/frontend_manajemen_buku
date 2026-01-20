import React from "react";

const BreadCrumb = ({ title }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      {title.map((item, index) => (
        <>
          <p>{item}</p>
          {title.length - 1 > index ? <span>/</span> : ""}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
