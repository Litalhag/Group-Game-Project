import LobbyModal from './pages/LobbyModal';
import LoginModal from './pages/LoginModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginModal />}></Route>
        <Route path="/lobby" element={<LobbyModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
