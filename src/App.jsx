import Home from './pages/home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <ToastContainer/>
      {/* <NavBar/> */}
      <Home />
    </div>
  )
}

export default App