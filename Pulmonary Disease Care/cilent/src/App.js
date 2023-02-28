
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Test from './pages/Test';


function App() {
  return (

<BrowserRouter>

      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/test' element={<Test/>}/>


</Routes>
</BrowserRouter>

  );
}

export default App;
