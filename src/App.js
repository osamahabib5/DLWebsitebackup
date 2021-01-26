import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Backdrop from "./components/Backdrop/Backdrop";
import './App.css'
import  Toolbar  from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import React,{useState}from 'react'
function App(props) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  //Toggle the Drawer Function
  const handleDrawerToggleClick = () =>{
    setSideDrawerOpen((prevDrawerState)=> !prevDrawerState)
  }
  const handleBackdropClick =() =>{
    setSideDrawerOpen(false)
  }
  let backdrop;
  if (sideDrawerOpen){
    backdrop = <Backdrop click = {handleBackdropClick} />
  }
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Toolbar handleDrawerToggleClick = {handleDrawerToggleClick}/>
        <SideDrawer show = {sideDrawerOpen}/>
        {backdrop}
      </div>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
