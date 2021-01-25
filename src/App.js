import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navigationbar from './components/Navigationbar'
import './App.css'
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigationbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
