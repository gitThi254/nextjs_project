import Search from "@/components/form/Search";

import React from "react";

const LayoutUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutUser;
