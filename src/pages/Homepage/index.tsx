import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import Login from "../Login";
import Signup from "../Signup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Autoplay, Navigation } from "swiper";
import TemplateCard from "../../components/cards/TemplateCard";

const CustomSwiper = styled(Swiper)`
  height: 100vh;
`;

function Logo({ setOpenLogin, setOpenSignup }: any) {
  return (
    <>
      <h1 className="select-none text-light text-9xl font-extrabold my-0">
        Web Maker
      </h1>
      <h1 className="select-none text-light text-3xl font-normal">
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
    </>
  );
}
function Proof() {
  return (
    <>
      <section className="w-full">
        <div className="h-full max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <dl className="h-full grid  gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-semibold text-gray-500 mx-auto">
                developers
              </dd>
            </div>
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-semibold text-gray-500 mx-auto">
                contributors
              </dd>
            </div>
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-semibold text-gray-500 mx-auto">
                organizations
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
function Feature() {
  return (
    <section className="w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for everyone
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Web Maker provides tools needed to create static website and somes
            templates for creating web application
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Drag and Drop
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Just drag and drop UI component in order to design your website
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Customize
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can customize UI components as you like, we provide all
              properties you need to style your components
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Template</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide some popular templates for web application
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm16 7l-3.536 3.536-1.414-1.415L17.172 12 15.05 9.879l1.414-1.415L20 12zM6.828 12l2.122 2.121-1.414 1.415L4 12l3.536-3.536L8.95 9.88 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">No code</h3>
            <p className="text-gray-500 dark:text-gray-400">
              No code required when creating web application as we have already
              provided popular APIs for your web application
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Sharing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can share your projects with your team or anyone, there are
              also community template which you can clone and use them
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 11h14V5H5v6zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 9H5v6h14v-6zM7 15h3v2H7v-2zm0-8h3v2H7V7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Deployment
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Run your website right here on our server or you can deploy it on
              your own server
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function TemplateContentPreview() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-white">
        Made by Web Maker
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwipersub h-full w-screen"
      >
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Homepage() {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenSignup, setOpenSignup] = useState(false);
  return (
    <div>
      <CustomSwiper
        mousewheel={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen bg-dark flex flex-col items-center justify-center">
            <Logo setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-dark flex items-center">
            <Feature />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-dark flex items-center justify-center">
            <TemplateContentPreview />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-dark flex items-center justify-center">
            <Proof />
          </div>
        </SwiperSlide>
      </CustomSwiper>
      {isOpenLogin && (
        <Login isOpenLogin={isOpenLogin} setOpenLogin={setOpenLogin} />
      )}
      {isOpenSignup && (
        <Signup
          setOpenLogin={setOpenLogin}
          isOpenSignup={isOpenSignup}
          setOpenSignup={setOpenSignup}
        />
      )}
    </div>
  );
}

export default Homepage;
