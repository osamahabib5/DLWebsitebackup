import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Footer /> */}
      <Switch>
        <Route path = '/' />
      </Switch>
    </Router>
  );
}
export default App;
