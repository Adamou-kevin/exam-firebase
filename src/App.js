import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Connecter from './pages/connecter';
import Inscription from './pages/inscription';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <ToastContainer position="top-center" />
                <Routes>
                    <Route path="/accueil" element={<Home />} />
                    <Route path="/add" element={<AddEdit />} />
                    <Route path="/update/:id" element={<AddEdit />} />
                    <Route path="/view/:id" element={<View />} />
                    <Route path="/about" element={<About />} />
                    <Route path="" element={<Connecter />} />
                    <Route path="/register" element={<Inscription />} />
                </Routes>
            </div>
        </>
    );
}

export default App;