import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/D0_DashboardComponent/D0_Screens/D0_Home";
import Projects from "./Components/D1_ProjectComponent/D1_Screens/D0_Projects";
import ProjectInfo from "./Components/D1_ProjectComponent/D2_Skeleton/D2_ProjectInfo";

function App() {
  return (
    <div className="App">
        <div className={`h-screen bg-black`}>
            <Router>
                <Routes>
                    <Route path = "*" element={<Home/>}/>
                    <Route path = "/Projects" element={<Projects/>}/>
                    <Route path = "/Projects/Info" element={<ProjectInfo/>}/>
                </Routes>
            </Router>
        </div>
    </div>
  );
}

export default App;
