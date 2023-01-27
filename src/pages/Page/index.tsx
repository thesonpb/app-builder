import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import PageView from "./PageView";
import PageBuilder from "../PageBuilder";

function Page() {
  return (
    <div>
      <Routes>
        <Route path="/:username/:pagename" element={<PageView />} />
        <Route path="/:username/:pagename/:id/edit" element={<PageBuilder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Page;
