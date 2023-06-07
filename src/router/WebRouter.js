import React from "react";
import { Home, Blog, Post, Courses } from "../pages/web";
import { Route, Routes } from "react-router-dom";
import { ClientLayout } from "../layouts";

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={loadLayout(ClientLayout, Home)} />
        <Route path="/courses" element={loadLayout(ClientLayout, Courses)} />
        <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
        <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
      </Routes>
    </div>
  );
}
