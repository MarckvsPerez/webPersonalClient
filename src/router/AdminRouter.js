import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Users, Blog, Courses, Newsletter, Menu } from "../pages/admin";
import { AdminLayout } from "../layouts";
import { useAuth } from "../hooks";

export function AdminRouter() {
  const { user } = useAuth();

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
        {!user ? (
          <Route path="/admin/*" element={<Auth />} />
        ) : (
          <>
            {["/admin", "/admin/blog"].map((path) => (
              <Route
                key={path}
                path={path}
                element={loadLayout(AdminLayout, Blog)}
              />
            ))}

            <Route
              path="/admin/users"
              element={loadLayout(AdminLayout, Users)}
            />
            <Route
              path="/admin/courses"
              element={loadLayout(AdminLayout, Courses)}
            />
            <Route path="/admin/Menu" element={loadLayout(AdminLayout, Menu)} />
            <Route
              path="/admin/Newsletter"
              element={loadLayout(AdminLayout, Newsletter)}
            />
          </>
        )}
      </Routes>
    </div>
  );
}
