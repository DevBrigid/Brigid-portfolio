import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import { projects } from './data/projects';

// const heroProject = projects.find((p) => p.featured);

function App() {
  

  return (
   <BrowserRouter>
    <div className="min-h-screen bg-paper text-ink font-body selection:bg-flag selection:text-ink">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App