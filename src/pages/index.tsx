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

const { Content } = Layout;

function Pages() {
  const { user } = useUser();
  const { pathname } = useLocation();
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);
  const isCreateScreen =
    pathname.includes("/create-app") || pathname.includes("/create-page");

  return (
    <div>
      <PageBuilderProvider>
        <Layout>
          <Header isCreateScreen={isCreateScreen} />
          <Layout>
            {!isCreateScreen && pathname !== "/home" && user?.id && (
              <Sider setType={setType} setVisible={setVisible} />
            )}
            <Layout>
              <Content
                className={`m-0 ${
                  !isCreateScreen &&
                  pathname !== "/home" &&
                  user?.id &&
                  "ml-60 p-6"
                } bg-editor`}
              >
                <Routes>
                  <Route index element={<Navigate to="/home" />} />
                  <Route path="/home" element={<div>home page</div>} />
                  {user?.id && (
                    <>
                      <Route path="/create-page/*" element={<PageBuilder />} />
                      <Route
                        path="/create-app/*"
                        element={<div>build app</div>}
                      />
                      <Route path="/page/*" element={<div>page</div>} />
                      <Route path="/app/*" element={<div>app</div>} />
                      <Route path="/recent/*" element={<div>recent</div>} />
                    </>
                  )}
                  <Route path="/community/*" element={<div>community</div>} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        <PopupSelectTemplate
          visible={visible}
          type={type}
          setVisible={setVisible}
        />

        <Outlet />
      </PageBuilderProvider>
    </div>
  );
}

export default Pages;
