import React,{useEffect, useState} from "react"
import axios from "axios";
import {useParams } from "react-router-dom";



export default function UpdateDriver(){

    const [Name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [Age, setAge] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact_Number, setContact_Number] = useState("");
    const [Vehicle_Number, setVehicle_Number] = useState("");


  const { id } = useParams();

  useEffect(() => {
      getDrivers();
    }, []);
  
  
    function getDrivers() {
      let driver = true;
  
// retriew data for id

      fetch(`http://localhost:8070/driver/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (driver) {
            setName(result.Name);
            setNIC(result.NIC);
            setAge(result.Age);
            setAddress(result.Address);
            setEmail(result.Email);
            setContact_Number(result.Contact_Number);
            setVehicle_Number(result.Vehicle_Number);
           
          }
          console.log(result);
        });
  
      return () => (driver = false);
    }

  // update data 
  
  function updateData(e){

      e.preventDefault();

      const updateDriver ={
        Name,
        NIC,
        Age,
        Address,
        Email,
        Contact_Number,
        Vehicle_Number
      }

      axios
    .patch(`http://localhost:8070/driver/update/${id}`, updateDriver)
    .then((_res) => {
      alert("Driver details Updated Successfully!");
   
      console.log(updateDriver);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
    <div className="container" class="p-3 mb-2 bg-secondary text-white">
        <h1 class="text-white-50 bg-dark"><center>Update Driver Details</center></h1>
        <form className =  "driver" >


                <div className="form-group">
                    <label htmlFor="inputEmail4">Driver Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Driver Name" value={Name}
                     onChange={(e)=>{setName(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="iinputPid">Driver NIC</label>
                    <input type="text" class="form-control" id="NIC" placeholder="Enter Your NIC Here" value={NIC}
                     onChange={(e)=> {setNIC(e.target.value);} }/>
                </div>

        

                <div className="form-group">
                    <label htmlFor="inputSugges">Driver Age</label>
                    <input type="int" class="form-control" id="Age" placeholder="Enter Your Age Here" value={Age}
                     onChange={(e)=>{setAge(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputFande"> Driver Address</label>
                    <input type="text" class="form-control" id="Address" placeholder="Enter Your Address" value={Address} 
                    onChange={(e)=>{setAddress(e.target.value);} }/>
                </div>

      
                <div className="form-group">
                    <label htmlFor="inputRate"> Driver Email</label>
                    <input type="email" class="form-control" id="Email" placeholder="Enter Your Email" value={Email} 
                    onChange={(e)=>{setEmail(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Driver Contact Number</label>
                    <input type="int" class="form-control" id="Contact_Number" placeholder="Enter Your Contact Number" value={Contact_Number}  
                    onChange={(e)=>{setContact_Number(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Driver Vehicle Number</label>
                    <input type="text" class="form-control" id="Vehicle_Number" placeholder="Enter Vehicle Number" value={Vehicle_Number}  
                    onChange={(e)=>{setVehicle_Number(e.target.value);} }/>
                </div>
            

            
        </form><br></br>
        
        <div>
            
            <button  type="button" class="btn btn-info"  onClick={updateData}><strong> Update Driver Details</strong>&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;
            <a href="/all" class="btn btn-info" style={{width:"300px"}}><strong>Driver Details</strong></a>&nbsp;&nbsp;
            <a href="/home" class="btn btn-info" style={{width:"300px"}}><strong>Go To Home Page</strong></a>

            </div>
            
            
 </div> 
 )

}





















