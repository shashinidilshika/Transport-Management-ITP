import React,{Component} from "react";
import axios from "axios";

//import Driver from "../../../Transport/BACKEND/models/Driver";

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
  
  onDelete(id){

     fetch(`http://localhost:8070/driver/delete/${id}`,{

           method:`DELETE`

     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retriveDrivers()

         })

     })
    
  } 

  //Search Mechod
 filterContent(drivers,searchTerm){

  const results=drivers.filter((Driver)=>Driver.Name.toLowerCase().includes(searchTerm));
  this.setState({drivers:results});

}

handleTextSearch=(e)=>{
// get data to db
   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/driver/all4").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingDrivers,searchTerm)
    }
});

};

 render(){

    return(
   <div class="text-bg-secondary p-3">
      <div className="container" >
      <center>
      <h1><strong>Driver Details</strong></h1>
      </center>
      <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
            <h3>Search driver name here</h3>
            
         </div>
         
         <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
               <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
               
               ></input></div></div>
      
      <table className="table table-hover" style={{marginTop:'40px'}}>
      <thead class="table-dark">
      <tr>
      <th scope="col">Count</th>
           <th scope="col">Name</th>
           <th scope="col">NIC</th>
           <th scope="col">Age</th>
           <th scope="col">Address</th>
           <th scope="col">Email</th>
           <th scope="col">Contact_Number</th>
           <th scope="col">Vehicle_Number</th>
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

        <a className="btn btn-success"  href={`/update/${drivers._id}`} >Update</a>&nbsp;&nbsp;
                                
          <button type="button" class="btn btn-danger" onClick={()=> this.onDelete(drivers._id)}>Delete</button>

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