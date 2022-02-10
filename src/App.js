import './App.css';
import { Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Kale from './Kale';
import Bananas from './Bananas';
import Berries from './Berries';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<VendingMachine />} />
            <Route exact path="/kale" element={<Kale />} />
            <Route exact path="/bananas" element={<Bananas />} />
            <Route exact path="/berries" element={<Berries />} />
        </Routes>
    </div>
  );
}

export default App;
