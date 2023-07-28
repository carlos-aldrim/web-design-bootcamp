import { Navbar } from "components";
import React from "react";

export const SimpleNavbarPage: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  const toggleNavbar = () => setIsNavbarOpen((prevState) => !prevState);

  return (
    <div>
      <Navbar onClick={toggleNavbar} isNavbarOpen={isNavbarOpen} />
    </div>
  );
};
