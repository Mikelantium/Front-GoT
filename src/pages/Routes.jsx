import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";
import CharactersDetailsPage from "./CharactersPage/CharactersDetailsPage";
import HousesPage from "./HousesPage/HousesPage";
import HousesDetailsPage from "./HousesPage/HousesDetailsPage";
import ChronologyPage from "./ChronologyPage/ChronologyPage";



export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<HomePage/>} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharactersDetailsPage />} />
      <Route path="/houses" element={<HousesPage />} />
      <Route path="/houses/:id" element={<HousesDetailsPage />} />
      <Route path="/chronology" element={<ChronologyPage />} />
    </RoutesDom>
  );
}
