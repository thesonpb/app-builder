import React from "react";
import { Layout } from "antd";
import Header from "../../layouts/Header";
const { Content } = Layout;
function Homepage() {
  return (
    <div>
      <Layout>
        <Header isCreateScreen={false} />
        <Content className="h-screen">Hompage content</Content>
      </Layout>
    </div>
  );
}

export default Homepage;
