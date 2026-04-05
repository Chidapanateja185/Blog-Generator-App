import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome.jsx';
import NotFound from './components/notfound.jsx';
import Home from './components/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
