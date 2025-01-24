import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About';
import defaultLayout from './pages/DefaultLayout';
import Home from './pages/Home';
import Books from './pages/Books';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route Component={defaultLayout}>
          <Route Index Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/books'>
            <Route index Component={Books} />
            <Route index path='/:id' />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;