import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/D0_DashboardComponent/D0_Screens/D0_Home";
import Projects from "./Components/D1_ProjectComponent/D1_Screens/D0_Projects";

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
        <Route path = "*" element={<Home/>}/>
        <Route path = "/Projects" element={<Projects/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
