import './App.css';
import AddDriver from './components/AddDriver';
import AllDrivers from './components/AllDrivers';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React from 'react';
import AddBooking from './components/AddDriverBooking';
import CusDriver from './components/CusDriver';
import AllBookings from './components/AllDriverBookings';
import UpdateDriver from './components/UpdateDriver';
import AllBooking2 from './components/BookingReport';
import TransportHome from'./components/TransportHome';

function App() {
 
  return (
    <Router> 
    <div className='container mt-3'>
     
        <Switch>
        <Route exact path={["/add"]} component = {AddDriver}/>
        <Route
            path="/add"
            component = {AddDriver}
        />
        <Route exact path={["/all"]} component = {AllDrivers}/>
        <Route
            path="/all"
            component = {AllDrivers} 
        /> 
        <Route exact path={["/update/:id"]} component = {UpdateDriver}/>
        <Route
            path="/update/:id"
            component = {UpdateDriver} 
        />  

        <Route exact path={["/add2"]} component = {AddBooking}/>
        <Route     
            path="/add2"
            component = {AddBooking}
        />

        <Route exact path={["/all2"]} component = {CusDriver}/>
        <Route
            path="/all2"
            component = {CusDriver} 
        />

        <Route exact path={["/all3"]} component = {AllBookings}/>
        <Route
            path="/all3"
            component = {AllBookings} 
        /> 

        <Route exact path={["/rep"]} component = {AllBooking2}/>
        <Route
            path="/rep"
            component = {AllBooking2} 
        /> 

        <Route exact path={["/home"]} component = {TransportHome}/>
        <Route
            path="/home"
            component = {TransportHome} 
        />


      </Switch>
      
    </div>

  </Router>
       
  );
}

export default App;
