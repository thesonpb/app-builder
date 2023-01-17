import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { AppContext } from "./app/context/AppContext";

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
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/*" element={<OtherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
