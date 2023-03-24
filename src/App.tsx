import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./app/context/AppContext";
import Cookie from "js-cookie";
import Page from "./pages/Page";
import Homepage from "./pages/Homepage";
import { Spin } from "antd";

const OtherPage = React.lazy(() => import("./pages"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: 0,
      onError: () => {},
    },
  },
});
function App() {
  const { setUser, user } = useContext(AppContext);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const token = Cookie.get("access_token");
    const loggedInUser = localStorage.getItem("user");
    if (token && loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      Cookie.remove("access_token");
      localStorage.removeItem("user");
    }
    setIsLoadingUser(false);
  }, []);

  if (isLoadingUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/page/*" element={<Page />} />
        <Route path="/*" element={!user?.id ? <Homepage /> : <OtherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
