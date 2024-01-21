import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Video from "./components/Video"
function App() {

  return (
    <>
    <div className="bg-fixed">
      <Header/>
      <Video/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
    </>
  )
}

export default App
