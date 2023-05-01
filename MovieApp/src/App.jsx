import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { HomePage } from "./views/HomePage";
import { SideBar } from "./components/SideBar/SideBar";
import { Container } from "./components/Container";
import { useState } from "react";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <SideBar isOpen={isOpen} onToggle={toggleSideBar} />
      <Container isOpen={isOpen}>
        <Routes>
          <Route path={routes.homepage} element={<HomePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
