import React from "react";
import { Navbar, Footer } from "./resusable-components/resusable-components-exporter";
import { Addrequest, Addservice,BlogDetailPage, Blogpage, Favorites, Home, Professional, Request, ServiceCard, ServiceCardDetail, Setting } from "./features/features-exporter";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="app-cont">
      <div className="app">

        <Navbar />
        <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/productservice" element={<ServiceCard/>}/>
    <Route path='/detailservice' element={<ServiceCardDetail/>} />
    <Route path='/services'/>
    <Route path='/requests' element={<Request/>}/>
    <Route path='/professional' element={<Professional/>}/>
    <Route path='/addservice' element={<Addservice/>}/>
    <Route path='/addrequest' element={<Addrequest/>}/>
    <Route path='/blog' element={<Blogpage/>}/>
    <Route path='/blog/blogdetail' element={<BlogDetailPage/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    <Route path='/setting' element={<Setting/>}/>
    </Routes>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;