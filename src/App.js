import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/D0_DashboardComponent/D0_Screens/D0_Home";
import Projects from "./Components/D1_ProjectComponent/D1_Screens/D0_Projects";
import ProjectInfo from "./Components/D1_ProjectComponent/D2_Skeleton/D2_ProjectInfo";
import Resume from "./Components/D2_Resume/D0_Resume";
import ContactMe from "./Components/D3_ContactMe/D0_ContactMe";
import './App.css';

function App() {
  return (
    <div className="App">
            <Router>
                <Routes>
                    <Route path = "*" element={<Home/>}/>
                    <Route path = "/Projects" element={<Projects/>}/>
                    <Route path = "/Projects/Info/:projectId" element={<ProjectInfo/>}/>
                    <Route path = "/Resume" element={<Resume/>}/>
                    <Route path = "/ContactMe" element={<ContactMe/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
