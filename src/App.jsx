import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Atoms/ScrollToTop/ScrollToTop.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import AboutUsPage from "./AboutUsPage/AboutUsPage.jsx";
import MeetTheTeamPage from "./MeetTheTeamPage/MeetTheTeamPage.jsx";
import PartnersPage from "./PartnersPage/PartnersPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={ <MainLayout /> }>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutUsPage />}/>
            <Route path="/team" element={<MeetTheTeamPage />}/>
            <Route path="/partners" element={<PartnersPage />}/>
            <Route path="/contact" element={<></>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
