import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AddJob from "./pages/addjobb/addJob";
import JobbList from "./pages/jobblist/jobList";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route  path="/" element={<JobbList />} />
      <Route path="/addJob" element= {<AddJob />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
