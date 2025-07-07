import React,{Component} from "react";
import axios from "axios";
import "./../style2.css";

// get details from db

export default class AllDrivers extends Component{

   constructor(props){

       super(props);

       this.state={

        drivers:[]
       };

   }
  componentDidMount(){

   this.retriveDrivers();
  }
  retriveDrivers(){

   axios.get("http://localhost:8070/driver/all4").then(res=>{

      if(res.data.success){
          this.setState({

            drivers:res.data.existingDrivers

          });

          console.log(this.state.drivers)

      }
   })

  }

 render(){

    return(

      <div className="container" class="back-img2">
      <div class ="card-driver">
      <center>
      <h1><u><strong>Driver Details</strong></u></h1>
      </center>
      <table className="table table-hover" style={{marginTop:'40px'}}>
      <thead class="table-dark">
      <tr>
      <th scope="col">Count</th>
           <th scope="col">Name</th>
           <th scope="col">NIC</th>
           <th scope="col">Age</th>
           <th scope="col">Address</th>
           <th scope="col">Email</th>
           <th scope="col">Contact Number</th>
           <th scope="col">Vehicle Number</th>
           <th scope="col">Action</th>
  
      </tr>
     </thead>
     <tbody>

       {this.state.drivers.map((drivers,index)=>(

        <tr>
          <th scope="row">{index+1}</th>
          <td>{drivers.Name}</td>
          <td>{drivers.NIC}</td>
          <td>{drivers.Age}</td>
          <td>{drivers.Address}</td>
          <td>{drivers.Email}</td>
          <td>{drivers.Contact_Number}</td>
          <td>{drivers.Vehicle_Number}</td>
        
         <td>         

          <a className="btn btn-warning" href="/add2">
              <i className="fas fa-edit"></i>&nbsp; Booking Now
          </a>


         </td>

        </tr>

       ))}

     </tbody>

     </table>
      </div>
      </div>
    ) 
 }

 }