import './main.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Hiba';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;