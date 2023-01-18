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
      <div className="h-screen w-full bg-teal-300 snap-start flex items-center">
        <section className="w-full">
          <div className="h-full max-w-screen-xl px-4 mx-auto text-center lg:px-6">
            <dl className="h-full grid  gap-8 mx-auto text-gray-900 sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  73M+
                </dt>
                <dd className="font-light text-gray-500">developers</dd>
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  1B+
                </dt>
                <dd className="font-light text-gray-500">contributors</dd>
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  4M+
                </dt>
                <dd className="font-light text-gray-500">organizations</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
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
