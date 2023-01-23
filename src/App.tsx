import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./app/context/AppContext";
import Cookie from "js-cookie";
import Page from "./pages/Page";

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
  const { setUser } = useContext(AppContext);

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
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/page/*" element={<Page />} />
        <Route path="/app/*" element={<div>app</div>} />
        <Route path="/*" element={<OtherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
