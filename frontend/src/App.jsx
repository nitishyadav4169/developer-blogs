import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About us/About";
import Contact from "./components/contact us/contact";
import {useState} from "react";
function App() {
  const currentUser = true;
  const [isAuthenticate,setAuthenticate] = useState(true);
  const handleAuthenticate=()=>{
    setAuthenticate(!isAuthenticate)
  }
  return (
    <BrowserRouter>
      <Topbar isAuthenticate={isAuthenticate} handleAuthenticate={handleAuthenticate}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Setting" element={<Settings />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
