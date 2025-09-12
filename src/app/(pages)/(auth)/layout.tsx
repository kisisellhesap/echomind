import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="flex min-h-screen overflow-hidden">{children}</div>;
};

export default Layout;
