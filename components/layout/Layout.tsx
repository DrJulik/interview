import React from "react";
const Layout = ({ children }: any) => {
  return (
    <div className="body">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
