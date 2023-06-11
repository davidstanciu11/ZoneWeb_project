import Home from "../pages/Home";
import Components from "../pages/Components";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/components" element={<Components/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;
