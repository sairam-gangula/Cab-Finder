import './App.css';
import './style.css';
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Register from './components/Register';
import Customer from './dashboard/Customer';
import {GlobalProvider} from './context/GlobalState';
import './darlky.css';
import CustomerNav from './Navbars/cnavbar';
import Ridehistory from './dashboard/Ridehistory';
import RHnavbar from './Navbars/RHnavbar';
import Mapgl  from './Maps/Mapgl.js';
import NYCmap from './Maps/NYCmap';
import Custprofile from './profile/Custprofile';
import Cprofilenavbar from './Navbars/CprofileNavbar';
import CSidebar from './sidebars/Csidebar';
import Mapnav from './Navbars/Mapnav';
// import Background from './background';
{/* <link rel="stylesheet" href="darlky.css"></link> */}
function App() {
  return (
    <GlobalProvider>
      <Router>
     <Route exact path="/Login" component={Frontpage}/>
      {/* <Route exact path="/login" component={Login}/> */}
      <Route exact path="/register" component={Register}/>
      <Route exact path ="/cride" component ={RHnavbar} />
      <Route exact path="/cride" component={Ridehistory} />
      <Route exact path="/cdashboard" component={CustomerNav}/>
      {/* <Route exact path="/map" component={Mapgl}/> */}
      {/* <Route exact path="/NYCmap" component={CSidebar}/> */}
      <Route exact path="/NYCmap" component={Mapnav}/>
      <Route exact path="/NYCmap" component={NYCmap}/>
      <Route exact path="/cdashboard" component={Customer}/> 
      <Route exact path="/MyProfile" component={Cprofilenavbar}/>
      <Route exact path="/MyProfile" component={Custprofile}/>
      
      </Router>
      </GlobalProvider>
  );
}

export default App;
