import logo from './logo.svg';
import './App.css';
import Header from './Component/Auth/Header'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './Component/Master/Page1';
import Page2 from './Component/Master/Page2';
import Page3 from './Component/Master/Page3';
import MainPage from './Component/Master/MainPage';
import AboutUs from './Component/Master/AboutUs';
import TermesConditions from './Component/Master/TermesConditions';
import Policy from './Component/Master/Policy';
import Discord from './Component/Master/Discord';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<MainPage/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/term' element={<TermesConditions/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/discord' element={<Discord/>}/>
      </Routes>
    </div>
  );
}

export default App;
