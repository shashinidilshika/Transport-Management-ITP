import React,{useState} from "react";
import axios from "axios";
import "./../style.css";

// add booking data

function AddBooking(){

  const [Name,setName] = useState("");
  const [Contact_Number,setContact_Number] = useState("");
  const [Destination,setDestination] = useState("");
  const [Start_Date,setStart_Date] = useState("");
  const [End_Date,setEnd_Date] = useState("");
  const [DName,setDName] = useState("");


  function sendData(e){
   e.preventDefault();
   
   const newBooking={

    Name,
    Contact_Number,
    Destination,
    Start_Date,
    End_Date,
    DName

   }
   axios.post("http://localhost:8070/booking/add2",newBooking).then(()=>{

     alert("Your reservation Created Succsessfully")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(

   <div className="container" class="back-img">
     <div class ="card-booking">
    <form onSubmit={sendData}>
      <div class="text-dark">
         <center><h1><strong><u>Fill the booking form</u></strong></h1></center><br></br>
      </div>
    <div className="form-group">
      <label for="Name"><strong>Your Name</strong></label>
      <input type="text" class="form-control" id="Name" required placeholder="Enter your name here"
      onChange={(e)=> {

        setName(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div className="form-group">
      <label for="Contact_Number"><strong>Your Contact Number</strong></label>
      <input type="Number" class="form-control" id="Contact_Number" required placeholder="Enter contact number here"
       onChange={(e)=> {

        setContact_Number(e.target.value);

       } }/>
      
      
  
    </div><br></br>
  
    <div className="form-group">
      <label for="Destination"><strong>Destination</strong></label>
      <input type="text" class="form-control" id="Destination" required placeholder="Enter your destination here"
      onChange={(e)=> {

        setDestination(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div className="form-group">
      <label for="Start_Date"><strong>Journey Start Date</strong></label>
      <input type="date" class="form-control" id="Start_Date" required placeholder="Enter your journey start date here"
      onChange={(e)=> {

        setStart_Date(e.target.value);

       } }/>

    
    </div><br></br>

    <div className="form-group">
      <label for="End_Date"><strong>Journey End Date</strong></label>
      <input type="date" class="form-control" id="End_Date" required placeholder="Enter your journey end date here"
      onChange={(e)=> {

        setEnd_Date(e.target.value);

       } }/>

    </div><br></br>

    <div className="form-group">
      <label for="DName"> <strong>Driver Name</strong></label>
      <input type="text" class="form-control" id="DName" required placeholder="Enter driver name here"
      onChange={(e)=> {

        setDName(e.target.value);

       } }/>


    
    </div><br></br>
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <button type="submit" class="btn btn-warning"><strong>Create Booking</strong></button>
    <div>
    <a href="/home" class="btn btn-warning" style={{width:"300px"}}><strong>Home</strong></a>
            </div>
    </div>
    
   </form>
   </div>
   </div>

 )

} 

export default AddBooking;


