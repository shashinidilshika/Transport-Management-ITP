const router = require("express").Router();
let Booking = require("../models/Booking");

//Add

http://localhost:8070/booking/add2

router.route("/add2").post((req,res)=>{

    const Name = req.body.Name;
    const Contact_Number = Number (req.body.Contact_Number);
    const Destination = req.body.Destination;
    const Start_Date = req.body.Start_Date;
    const End_Date = req.body.End_Date;
    const DName = req.body.DName;

    const newBooking = new Booking({
        Name,
        Contact_Number,
        Destination,
        Start_Date,
        End_Date,
        DName
    })

    newBooking.save().then(()=>{
        res.json("Your reservation was successful.")
    }).catch((err)=>{
        console.log(err);
    })

})

//retrieve all data

http://localhost:8070/booking

router.get("/all3",(req,res)=>{
    Booking.find().exec((err,booking)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingBooking:booking
        });
    });
});

module.exports = router;