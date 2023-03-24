import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import PageView from "./PageView";

function Page() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<PageView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Page;
