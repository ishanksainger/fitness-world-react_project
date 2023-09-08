import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <NavBar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='gallery' element = {<Gallery/>}/>
      <Route path='plans' element = {<Plans/>}/>
      <Route path='trainers' element = {<Trainers/>}/>
      <Route path='*' element = {<NotFound/>}/>
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
