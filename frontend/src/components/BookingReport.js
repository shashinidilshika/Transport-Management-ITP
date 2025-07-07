import React, { Component } from "react";
import axios from "axios";

export default class AllBooking2 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            booking: []
        };

    }

 // connect to the db

    componentDidMount(){

        this.retriveBookings();
       }
       retriveBookings(){
     
        axios.get("http://localhost:8070/booking/all3").then(res=>{
     
           if(res.data.success){
               this.setState({
     
                 booking:res.data.existingBooking
     
               });
     
               console.log(this.state.booking)
     
           }
     
     
        })
     
     
     
    }

    // print report
   
    repotGen=()=>{

         window.print();

    }

    render() {

        return (

            <div className="container" class="p-3 mb-2 bg-info text-dark">

            <h1><center><strong>All Booking Details</strong></center></h1><br></br>
      
            <table class="table table-light table-hover">
            <thead class="table-dark">
            <tr class="text-white">
                 <th scope="col">Count</th>
                 <th scope="col">Name</th>
                 <th scope="col">Contact Number</th>
                 <th scope="col">Destination</th>
                 <th scope="col">Start Date</th>
                 <th scope="col">End Date</th>
                 <th scope="col">Driver Name</th>
        
        
            </tr>
           </thead>
           <tbody>
      
             {this.state.booking.map((booking,index)=>(
      
              <tr>
                <th scope="row">{index+1}</th>
                <td>{booking.Name}</td>
                <td>{booking.Contact_Number}</td>
                <td>{booking.Destination}</td>
                <td>{booking.Start_Date}</td>
                <td>{booking.End_Date}</td>
                <td>{booking.DName}</td>
                
              </tr>
      
             ))}
      
           </tbody>
      
           </table>

            <button className="btn btn-primary" onClick={this.repotGen}>Print</button>

            </div>



        )
    }

}