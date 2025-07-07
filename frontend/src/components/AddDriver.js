import React,{useState} from "react";
import axios from "axios";

// connect to the db and add driver details

function AddDriver(){

    const [Name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [Age, setAge] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact_Number, setContact_Number] = useState("");
    const [Vehicle_Number, setVehicle_Number] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newDriver={
            Name,
            NIC,
            Age,
            Address,
            Email,
            Contact_Number,
            Vehicle_Number
        }

        axios.post("http://localhost:8070/driver/add",newDriver).then(()=>{
            alert("Driver added")

        
        }).catch((err)=>{
            alert(err)
        })
    }

        return(
          <div className="container" class="p-3 mb-2 bg-secondary text-black">
            <form onSubmit={sendData}>
            <center>
            <h1><u><strong>Insert Driver Details</strong></u></h1>
            </center>

            <div className="form-group">
              <label for="Name">Driver Name</label>
              <input type="text" class="form-control" id="Name" required placeholder="Enter Your Name Here"
              onChange={(e)=> {
        
                setName(e.target.value);
        
               } }/>
          
            </div><br></br>
            
            <div className="form-group">
              <label for="NIC">Driver NIC</label>
              <input type="text" class="form-control" id="NIC" required placeholder="Enter Your NIC Here"
               onChange={(e)=> {
        
                setNIC(e.target.value);
        
               } }/>
          
            </div><br></br>

            
            <div className="form-group">
              <label for="Age">Driver Age</label>
              <input type="int" class="form-control" id="Age" required placeholder="Enter Your Age Here"
              onChange={(e)=> {
        
                setAge(e.target.value);
        
               } }/>
              
          
            </div><br></br>
            
            <div className="form-group">
            <label for="Address">Driver Address</label>
              <input type="text" class="form-control" id="Address" required placeholder="Enter Your Address"
              onChange={(e)=> {
        
                setAddress(e.target.value);
        
               } }/>
        
            
            </div><br></br>
            
            <div className="form-group">
              <label for="Email">Driver Email</label>
              <input type="email" class="form-control" id="Email" required placeholder="Enter Your Email"
              onChange={(e)=> {
        
                setEmail(e.target.value);
        
               } }/>
        
            
            </div><br></br>
            
            <div className="form-group">
              <label for="Contact_Number"> Driver Contact_Number</label>
              <input type="int" class="form-control" id="Contact_Number" required placeholder="Enter Your Contact Number"
              onChange={(e)=> {
        
                setContact_Number(e.target.value);
        
               } }/>
        
            
            </div><br></br>
        
            
            <div className="form-group">
              <label for="Vehicle_Number">Vehicle_Number</label>
              <input type="text" class="form-control" id="Vehicle_Number" required placeholder="Enter Vehicle_Number"
              onChange={(e)=> {
        
                setVehicle_Number(e.target.value);
        
               } }/>
        
            
            </div><br></br>
            
            <div class="d-grid gap-2 col-6 mx-auto"> 
              <button class="btn btn-primary" type="Submit" >Submit</button>
              
          </div>

           </form><br></br>
           <center><a href="/all" class="btn btn-primary" style={{width:"550px"}}>Get Driver Details</a></center>
           </div>
    )
}

export default AddDriver;