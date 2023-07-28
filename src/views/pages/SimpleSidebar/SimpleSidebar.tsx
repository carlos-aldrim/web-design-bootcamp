import React from "react";
import { Sidebar } from "components";

export const SimpleSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  return (
    <div>
      <Sidebar onClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </div>
  );
};
