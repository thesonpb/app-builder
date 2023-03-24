import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "antd";
import PageNotFound from "./PageNotFound";
import Header from "../layouts/Header";
import Sider from "../layouts/Sider";
import PopupSelectTemplate from "../components/popups/PopupSelectTemplate";
import PageBuilder from "./PageBuilder";
import { PageBuilderProvider } from "../app/context/PageBuilderContext";
import { useUser } from "../app/hooks";
import Homepage from "./Homepage";
import MyPage from "./MyPage";
import PublicPage from "./PublicPage";
import Profile from "./Profile";

const { Content } = Layout;

function Pages() {
  const { user } = useUser();
  const { pathname } = useLocation();
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);
  const isCreateScreen = pathname.includes("/create-page");
  const isProfilePage = pathname.includes("/profile");

  return (
    <div>
      <PageBuilderProvider>
        <Layout>
          {pathname !== "/" && !isCreateScreen && <Header />}
          <Layout>
            {!isCreateScreen && user?.id && !isProfilePage && (
              <Sider setType={setType} setVisible={setVisible} />
            )}
            <Layout>
              <Content
                className={`m-0 ${
                  !isCreateScreen && user?.id && !isProfilePage && "ml-60"
                } bg-editor main-content`}
              >
                <Routes>
                  <Route
                    index
                    element={
                      !user?.id ? <Homepage /> : <Navigate to="/my-pages" />
                    }
                  />

                  <Route path="/profile/:id" element={<Profile />} />

                  {user?.id && (
                    <>
                      <Route path="/create-page/*" element={<PageBuilder />} />
                      <Route path="/my-pages/*" element={<MyPage />} />
                      <Route path="/community/*" element={<PublicPage />} />
                    </>
                  )}
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        {visible && (
          <PopupSelectTemplate
            visible={visible}
            type={type}
            setVisible={setVisible}
          />
        )}
        <Outlet />
      </PageBuilderProvider>
    </div>
  );
}

export default Pages;
