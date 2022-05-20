import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import Navbar from './components/Navbar';
import DetailView from './view/DetailView';
import FormView from './view/FormView';
import Update from './components/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Main />} />
          <Route path="/exercises/print" element ={<DetailView />} />
          <Route path="/exercises/add" element ={<FormView />} />
          <Route path="/exercises/edit/:id" element ={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
