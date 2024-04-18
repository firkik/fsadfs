import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppAbout from "./AppAbout";
import AppIndex from "./AppIndex";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppIndex />}/>
        <Route path="/about" element={<AppAbout />}/>
      </Routes>
    </Router>
  )
}