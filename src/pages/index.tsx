import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import PageNotFound from "./PageNotFound";
import Header from "../layouts/Header";
import Sider from "../layouts/Sider";
import PopupSelectTemplate from "../components/popups/PopupSelectTemplate";

const { Content } = Layout;

function Pages() {
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Sider setType={setType} setVisible={setVisible} />
          <Layout>
            <Content className="m-0 ml-60 p-6 h-screen bg-editor">
              <Routes>
                <Route index element={<Navigate to="/home" />} />
                <Route path="/home" element={<div>home page</div>} />
                <Route
                  path="/create-page/*"
                  element={<div className="h-screen">build page</div>}
                />
                <Route path="/create-app/*" element={<div>build app</div>} />
                <Route path="/page/*" element={<div>page</div>} />
                <Route path="/app/*" element={<div>app</div>} />
                <Route path="/recent/*" element={<div>recent</div>} />
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
    </div>
  );
}

export default Pages;
