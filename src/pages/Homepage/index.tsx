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
import { useQuery } from "react-query";
import ProofModel from "../../app/models/Proof";

const CustomSwiper = styled(Swiper)`
  height: 100vh;
`;

function Logo({ setOpenLogin, setOpenSignup }: any) {
  return (
    <>
      <h1 className="select-none text-light text-9xl font-extrabold my-0">
        Component Craft
      </h1>
      <h1 className="select-none text-light text-3xl font-normal">
        Design beautiful web pages effortlessly
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
  const { data: numUsers } = useQuery(["getNumberOfUsers"], async () => {
    return await ProofModel.getNumberOfUsers();
  });
  const { data: numWebsites } = useQuery(["getNumberOfWebsites"], async () => {
    return await ProofModel.getNumberOfWebsites();
  });
  const { data: numTemplates } = useQuery(
    ["getNumberOfTemplates"],
    async () => {
      return await ProofModel.getNumberOfTemplates();
    }
  );
  return (
    <>
      <section className="w-full">
        <div className="h-full max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <dl className="h-full grid  gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                {numUsers || 0}
              </dt>
              <dd className="font-semibold text-gray-500 mx-auto">users</dd>
            </div>
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                {numWebsites || 0}
              </dt>
              <dd className="font-semibold text-gray-500 mx-auto">websites</dd>
            </div>
            <div className="select-none rounded-2xl flex flex-col items-center justify-center h-full bg-light py-8 lg:py-16">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                {numTemplates || 0}
              </dt>
              <dd className="font-semibold text-gray-500 mx-auto">templates</dd>
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
            Create beautiful web pages effortlessly with Component Craft. Drag
            and drop customizable components, download code, and share with
            others
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
              Easily create stunning web pages with our intuitive drag-and-drop
              interface. No coding skills required
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
              Customizable Components
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Personalize every aspect of your components with Component Craft.
              Easily style and modify to create unique web pages
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
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Code Export
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Download clean and organized code in React or Vue format. Use our
              code as a starting point for your next web development project
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
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Template Library
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Jumpstart your design process by choosing from our extensive
              library of pre-built templates. Select a template and customize to
              your liking
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-400 lg:h-12 lg:w-12">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.235 2.37377C10.867 2.52577 10.538 2.85577 9.87898 3.51377C9.21998 4.17377 8.88998 4.50277 8.73898 4.86977C8.63843 5.11246 8.58668 5.37258 8.58668 5.63527C8.58668 5.89796 8.63843 6.15808 8.73898 6.40077C8.88998 6.76877 9.21898 7.09777 9.87898 7.75677C10.537 8.41577 10.867 8.74577 11.235 8.89677C11.7248 9.09955 12.2751 9.09955 12.765 8.89677C13.133 8.74577 13.462 8.41677 14.121 7.75677C14.781 7.09777 15.109 6.76877 15.261 6.40077C15.4638 5.91093 15.4638 5.36061 15.261 4.87077C15.109 4.50277 14.781 4.17377 14.121 3.51477C13.462 2.85477 13.133 2.52577 12.765 2.37377C12.2751 2.17098 11.7248 2.17098 11.235 2.37377ZM4.86998 8.73777C4.50298 8.88977 4.17298 9.21877 3.51498 9.87777C2.85498 10.5378 2.52598 10.8668 2.37398 11.2338C2.27343 11.4765 2.22168 11.7366 2.22168 11.9993C2.22168 12.262 2.27343 12.5221 2.37398 12.7648C2.52598 13.1328 2.85598 13.4618 3.51398 14.1208C4.17398 14.7798 4.50298 15.1088 4.86998 15.2608C5.11266 15.3613 5.37278 15.4131 5.63548 15.4131C5.89817 15.4131 6.15829 15.3613 6.40098 15.2608C6.76898 15.1088 7.09798 14.7798 7.75698 14.1208C8.41698 13.4618 8.74498 13.1328 8.89698 12.7648C9.09976 12.2749 9.09976 11.7246 8.89698 11.2348C8.74498 10.8668 8.41698 10.5368 7.75698 9.87777C7.09798 9.21877 6.76898 8.88977 6.40098 8.73777C5.91113 8.53498 5.35982 8.53498 4.86998 8.73777ZM16.243 9.87777C15.584 10.5378 15.255 10.8668 15.103 11.2338C15.0024 11.4765 14.9507 11.7366 14.9507 11.9993C14.9507 12.262 15.0024 12.5221 15.103 12.7648C15.255 13.1328 15.584 13.4618 16.243 14.1208C16.902 14.7798 17.232 15.1088 17.599 15.2608C18.0888 15.4636 18.6391 15.4636 19.129 15.2608C19.497 15.1088 19.827 14.7798 20.486 14.1208C21.145 13.4618 21.473 13.1328 21.626 12.7648C21.8288 12.2749 21.8288 11.7246 21.626 11.2348C21.473 10.8668 21.145 10.5368 20.486 9.87777C19.826 9.21877 19.497 8.88977 19.13 8.73777C18.8873 8.63722 18.6272 8.58547 18.3645 8.58547C18.1018 8.58547 17.8417 8.63722 17.599 8.73777C17.232 8.88977 16.902 9.21877 16.243 9.87777ZM11.235 15.1018C10.867 15.2538 10.538 15.5838 9.87898 16.2418C9.21998 16.9018 8.88998 17.2308 8.73898 17.5988C8.53619 18.0886 8.53619 18.6389 8.73898 19.1288C8.88998 19.4968 9.21898 19.8258 9.87898 20.4848C10.537 21.1438 10.867 21.4738 11.235 21.6248C11.7248 21.8276 12.2751 21.8276 12.765 21.6248C13.133 21.4738 13.462 21.1448 14.121 20.4848C14.781 19.8258 15.109 19.4968 15.261 19.1288C15.464 18.6388 15.464 18.0888 15.261 17.5988C15.109 17.2308 14.781 16.9008 14.121 16.2428C13.462 15.5828 13.133 15.2538 12.765 15.1018C12.2751 14.899 11.7248 14.899 11.235 15.1018Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Component Library
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Access a vast library of pre-built components to quickly add
              functionality to your web page
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
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Share Your Web Pages
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Share the web pages you create with Component Craft with others or
              the public as templates. Easily collaborate with others and
              showcase your work to the world
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
        Made by Component Craft
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
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TemplateCard item={1} />
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
