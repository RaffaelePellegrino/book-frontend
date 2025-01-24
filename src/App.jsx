import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About';
import defaultLayout from './pages/DefaultLayout';
import Home from './pages/Home';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route Component={defaultLayout}>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;