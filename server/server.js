require('dotenv').config()
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO

cors({
	origin :  process.env.CLIENT,
	methods : ['GET' , 'POST' , 'DELETE' ,'PUT'],
	allowedHeaders:['Content-Type', 'Authorization'],
})

app.use(express.json());

// database connect
mongoose
.connect(MONGO)
.then(() => console.log("mongodb is connected"))
.catch((e) => console.log(e))

//routers configuration


app.use((err,req,res,next) => {
	console.log(err.stack);
	res.status(500).json({
		success:false,
		message: "Something went wrong"
	})
})

app.listen(PORT , () => {
	console.log(`Server is running on port ${PORT}`)
})