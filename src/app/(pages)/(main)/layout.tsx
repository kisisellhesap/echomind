import Aside from "@/app/components/aside";
import Following from "@/app/components/following";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="flex h-full gap-3 relative">
        <Aside />

        <div className="min-w-[400px] max-md:min-w-[300px] flex-1">
          {children}
        </div>
        <Following />
      </div>
    </div>
  );
};

export default Layout;
