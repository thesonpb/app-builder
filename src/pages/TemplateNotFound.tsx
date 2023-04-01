import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function TemplateNotFound() {
  const navigate = useNavigate();
  return (
    <div className=" pt-22 flex fixed top-0 left-0 z-50 w-screen h-screen flex-col items-center bg-light">
      <h1 style={{ fontSize: "200px" }} className="m-0">
        Oops!
      </h1>
      <h1 className="text-4xl mb-0">TEMPLATE NOT FOUND</h1>
      <p className="text-xl mb-10 mt-4">
        The template you try to access may not exist!
      </p>
      <Button
        type="primary"
        className="text-xl rounded-full py-4 h-max font-medium"
        size="large"
        onClick={() => navigate("/")}
      >
        GO TO HOMEPAGE
      </Button>
    </div>
  );
}

export default TemplateNotFound;
