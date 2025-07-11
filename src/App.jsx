import './App.css'
import{Routes, Route} from "react-router-dom";
import Layout from './Layout.jsx'
function App() {
 

  return (
    <div>
     <Routes>
      <Route path='/' element={<Layout/>}>

      </Route>
     </Routes>

    </div>
  )
}

export default App
