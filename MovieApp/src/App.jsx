import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { HomePage } from "./views/HomePage";
import { SideBar } from "./components/SideBar/SideBar";
import { Container } from "./components/Container";
import { useState } from "react";
import { ToWatch } from "./views/ToWatch";
import { About } from "./views/About";
import { SearchBar } from "./components/SearchBar";
import { MoreInfo } from "./views/MoreInfo";
import { MoviesRanking } from "./views/moviesRanking";
import { TvShowsRanking } from "./views/tvShowsRanking";
import { SearchBarr } from "./components/SearchBarr";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <SideBar isOpen={isOpen} onToggle={toggleSideBar} />
      <Container isOpen={isOpen}>
        <SearchBar />
        <SearchBarr />
        <Routes>
          <Route path={routes.homepage} element={<HomePage />} />
          <Route path={routes.movies_ranking} element={<MoviesRanking />} />
          <Route path={routes.tvshows_ranking} element={<TvShowsRanking />} />
          <Route path={routes.towatch} element={<ToWatch />} />
          <Route path={routes.moreinfo} element={<MoreInfo />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
