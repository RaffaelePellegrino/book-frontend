import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About';
import defaultLayout from './pages/DefaultLayout';
import Contact from "./pages/Contact";
import Card from "./components/Card";
import bookDetail from "./pages/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={defaultLayout}>
          <Route path='/books' Component={Card} />
          <Route path='/:id' Component={bookDetail} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

