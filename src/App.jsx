import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout/MainLayout.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <MainLayout /> }>
            <Route path="/" element={<></>}/>
            <Route path="/about" element={<></>}/>
            <Route path="/team" element={<></>}/>
            <Route path="/partners" element={<></>}/>
            <Route path="/contact" element={<></>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
