import express from "express"
import { getStations } from "./models/stations";
const app = express()

app.use(express.json());

const PORT = 5001

app.listen(PORT, ()=>{
    console.log("Listening on port " + PORT)
})

app.post("/api/search", async (req, res)=>{
   const {country, tag} = req.body

   try{
    const response = await getStations({country, tag})
    res.json({response})

   }catch(error){

    console.log(error)
    res.status(500).json({message: "server error"})
   }
   
   
})