import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Backdrop from "./components/Backdrop/Backdrop";
import './App.css'
import  Toolbar  from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Toolbar />
        <SideDrawer />
        <Backdrop />
      </div>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
