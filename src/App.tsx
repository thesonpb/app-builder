import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

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
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/*" element={<OtherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
