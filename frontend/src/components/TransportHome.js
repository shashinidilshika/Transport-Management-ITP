import "./../styleAdmin.css";
import React, { Component } from "react";
import axios from "axios";

export default class TransportHome extends Component {


render () {

    return(
    
    <div className="container" class="back-img3">
      <div class ="card-admin">
     <form >
       <div class="fst-italic">
          <center><h1><strong><u>WELCOME TO TRANSPORT MANAGER'S HOME</u></strong></h1></center><br></br>
       </div>
    
     
     <div class="d-grid gap-2 col-6 mx-auto">
     <div>
     <a href="/add" class="btn btn-warning" style={{width:"300px"}}><strong>Driver Details</strong></a><br></br>
     </div>
     <div>
     <a href="/all3" class="btn btn-warning" style={{width:"300px"}}><strong>Booking Details</strong></a><br></br>
     </div>
     </div>
     
    </form>
    </div>
    </div>
    )
}
 
} 