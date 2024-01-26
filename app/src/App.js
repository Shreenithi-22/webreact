import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Counter from "./UseState/Counter"
import Effect  from "./UseState/Effect"
import Reducer from "./UseState/Reducer"
import Callbacks from "./UseState/Callbacks"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="effect" element={<Effect/>}/>
        <Route path="reducer" element={<Reducer/>}/>
        <Route path="callbacks" element={<Callbacks/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}