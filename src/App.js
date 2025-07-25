import Home from "./components/Layouts/Home";
import{BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    
     <Home/>
     
     <Router>
      <Routes>
        <Route />
      </Routes>
     </Router>
    </>
  );
}

export default App;
