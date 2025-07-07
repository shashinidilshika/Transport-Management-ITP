const router = require("express").Router();
let Driver = require("../models/Driver");

//add data

http://localhost:8070/driver/add

router.route("/add").post((req,res)=>{

    const Name = req.body.Name;
    const NIC = req.body.NIC;
    const Age = Number (req.body.Age);
    const Address = req.body.Address;
    const Email = req.body.Email;
    const Contact_Number = Number (req.body.Contact_Number);
    const Vehicle_Number = req.body.Vehicle_Number;

    const newDriver = new Driver({
        Name,
        NIC,
        Age,
        Address,
        Email,
        Contact_Number,
        Vehicle_Number
    })

    newDriver.save().then(()=>{
        res.json("Driver Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Retrive all

http://localhost:8070/driver

router.get("/all4",(req,res)=>{
    Driver.find().exec((err,drivers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingDrivers:drivers
        });
    });
});


//Retrive by ID 
router.route("/get/:id").get(async(req,res)=>{
    const dr = await Driver.findById(req.params.id);

  if (dr) {
    res.json(dr);
  } else {
    res.status(404).json({ message: "Driver not found" });
  }
})

   module.exports = router;

//Update 

http://localhost:8070/driver/update/5isadfasddafs


router.route("/update/:id").patch(async(req,res)=>{

    const dr = await Driver.findById(req.params.id);

  if (dr) {
    dr.Name = req.body.Name || dr.Name;
    dr.NIC = req.body.NIC ||  dr.NIC;
    dr.Age = req.body.Age || dr.Age;
    dr.Address = req.body.Address || dr.Address;
    dr.Email = req.body.Email || dr.Email;
    dr.Contact_Number = req.body.Contact_Number || dr.Contact_Number;
    dr.Vehicle_Number = req.body.Vehicle_Number || dr.Vehicle_Number;

    const updateDriver = await dr.save();

    res.json({
        Name: updateDriver.Name,
        NIC: updateDriver.NIC,
        Age: updateDriver.Age,
        Address: updateDriver.Address,
        Email: updateDriver.Email,
        Contact_Number: updateDriver.Contact_Number,
        Vehicle_Number: updateDriver.Vehicle_Number,
        
    });
  } else {
    res.status(404);
    
    throw new Error("Can't Update Driver Details");
  }


})

//Delete

http://localhost:8070/driver/delete/

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Driver.findByIdAndDelete(userId).then(()=>{
      res.status(200).send({status: "Driver deleted"});
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with deleting data", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;

    const user = await Driver.findById(userId).then((driver)=>{
        res.status(200).send({status: "User fetched", driver})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })

})

module.exports = router;