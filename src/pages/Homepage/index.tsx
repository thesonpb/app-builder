import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import Login from "../Login";
import Signup from "../Signup";

const HideScrollBarDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

function Homepage() {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenSignup, setOpenSignup] = useState(false);
  return (
    <HideScrollBarDiv className="w-full snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="h-screen w-full bg-amber-400 snap-start flex flex-col items-center justify-center">
        <h1 className="text-light text-9xl font-extrabold my-0">Web Maker</h1>
        <h1 className="text-light text-3xl font-normal">
          Create static website and webapp with templates
        </h1>
        <div className="flex gap-x-2">
          <Button
            type="primary"
            className="flex items-center justify-center text-xl px-10 py-6"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </Button>
          <Button
            className="flex items-center justify-center text-xl px-10 py-6"
            type="default"
            onClick={() => setOpenSignup(true)}
          >
            Signup
          </Button>
        </div>
      </div>
      <div className="h-screen w-full bg-teal-300 snap-start"></div>
      <div className="h-screen w-full bg-blue-300 snap-start"></div>
      <div className="h-screen w-full bg-red-300 snap-start"></div>
      <div className="h-screen w-full bg-gray-500 snap-start"></div>
      {isOpenLogin && (
        <Login isOpenLogin={isOpenLogin} setOpenLogin={setOpenLogin} />
      )}
      {isOpenSignup && (
        <Signup isOpenSignup={isOpenSignup} setOpenSignup={setOpenSignup} />
      )}
    </HideScrollBarDiv>
  );
}

export default Homepage;
