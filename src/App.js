import React from "react";
import { HashRouter } from "react-router-dom";
import { AdminRouter, WebRouter } from "./router";
import { AuthProvider } from "./context";

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <WebRouter />
        <AdminRouter />
      </HashRouter>
    </AuthProvider>
  );
}
