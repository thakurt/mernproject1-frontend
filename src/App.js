

import Topbar2 from "./components/topbnar2/Topbar2"
//import Header from "./header/Header";
import Home from "./pages/home/Home";
import Newpost from "./pages/newPost/Newpost";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";


function App() {
  const {user} = useContext(Context)

  return (
    
    <Router>
      
      <Topbar2/>
      <Routes>
        <Route path='/'  element={ <Home />} />
        <Route path='/register'  element={ user ? <Home/>: <Register />} />
        <Route path='/login' element={user ? <Home/>: <Login />} />
        <Route path='/newpost' element={user ? <Newpost/>: <Register />} />
        <Route path='/settings' element={user ?<Settings/>: <Register/>} />
        <Route path='/post/:postId' element={<Single />} />


      </Routes>

    </Router>
  );
}

export default App;
