import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/D0_DashboardComponent/D0_Screens/D0_Home";

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path = "*" element={<Home/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
