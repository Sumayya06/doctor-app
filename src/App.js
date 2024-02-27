import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoc from './components/AddDoc';
import ViewDoc from './components/ViewDoc';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<AddDoc/>}/>
        <Route path='/view' element={<ViewDoc/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
