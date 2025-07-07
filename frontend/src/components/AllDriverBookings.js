import React,{Component} from "react";
import axios from "axios";

export default class AllBookings extends Component{

   constructor(props){

       super(props);

       this.state={

        booking:[]
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


// delete in the db
  
     
  onDelete(id){

     fetch(`http://localhost:8070/booking/delete/${id}`,{

           method:`DELETE`


     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retriveBookings()

         })


     })
    


  }



 render(){

    return(

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
           <th scope="col">Action</th>
  
  
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
          
          <td>
          <a className="btn btn-primary"  href={`/all3`} >Confirm</a><br></br>
          
               
        </td>
        </tr>

       ))}

     </tbody>

     </table>
     <a className="btn btn-primary"  href={`/rep`} >repotGen</a>
      </div>

    ) 
 }

 }