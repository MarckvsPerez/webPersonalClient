import React from "react";
import "./AdminLayout.scss";
import { Icon } from "../../assets";
import { AdminMenu, Logout } from "../../components/Admin/AdminLayout";

export function AdminLayout(props) {
  const { children } = props;

  return (
    <div className="admin-layout">
      <div className="admin-layout_left">
        <Icon.LogoWhite className="logo" />
        <AdminMenu />
      </div>
      <div className="admin-layout_right">
        <div className="admin-layout_right-header">
          <Logout />
        </div>
        <div className="admin-layout_right-content">{children}</div>
      </div>
    </div>
  );
}
