import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import ContactMe from "./pages/contact"
import Blog from "./pages/blog"
import Awards from "./pages/awards"
import BlogDetail from "./pages/blogDetail"
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
        <Route path='/awards' element={<Awards/>}/>
      </Routes>
    </Router>
  )
}

export default App
