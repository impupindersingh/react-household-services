import React from "react";
import { Navbar, Footer } from "./resusable-components/resusable-components-exporter";
import { Addrequest, Addservice,BlogDetailPage, Blogpage, Home } from "./features/features-exporter";
import { Routes,Route } from "react-router-dom";
import   ServiceCard  from "./features/service-card/ServiceCard";
import ServiceCardDetail from "./features/service-card-detail/ServiceCardDetail";

function App() {
  return (
    <div className="app-cont">
      <div className="app">

        <Navbar />
        <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/productservice" element={<ServiceCard/>}/>
    <Route path='/detailservice' element={<ServiceCardDetail/>} />
    <Route path='/addservice' element={<Addservice/>}/>
    <Route path='/addrequest' element={<Addrequest/>}/>
    <Route path='/Blog' element={<Blogpage/>}/>
    <Route path='/Blog/blogdetail' element={<BlogDetailPage/>}/>
    </Routes>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;