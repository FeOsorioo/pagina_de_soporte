import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './Components/Layout.jsx';
import App from './App.jsx';
import Monitor from './pages/monitor.jsx';
import Image from './pages/image.jsx';
import Headset from './pages/headset.jsx';
import Keyboard from './pages/keyboard.jsx';
import Mouse from './pages/mouse.jsx';
import Red from './pages/red.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/imagen" element={<Image />} />
          <Route path="/headset" element={<Headset />} />
          <Route path="/teclado" element={<Keyboard />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route path="/red" element={<Red />} />
        </Route>
        <Route path="*" element={<h1 className="p-10">404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
