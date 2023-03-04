const express = require("express");
const cors = require("cors");
require("dotenv").config();
let port = process.env.PORT;
const { noteModel } = require("./Models/Notes.model");

const { connection } = require("./Config/db");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is homepage for IWCN");
});
app.get("/notes",async(req,res)=>{
  const notes=await noteModel.find()
  res.send(notes)
})
app.post("/create", async(req,res)=>{
    const {Title}=req.body
    const note=new noteModel({Title})
    try{
        await note.save()
        res.send("Note created")
    }
    catch(err){
        res.send("Something went wrong")
    }
})
app.delete("/delete/:noteId",async(req,res)=>{
    const {noteId}=req.params
    const deleteNote=await noteModel.findOneAndDelete({_id:noteId})
    if(deleteNote){
        res.send("Deleted successfully")
    }else{
        res.send("Couldn't deleted")
    }
})
app.patch("/edit/:noteId",async(req,res)=>{
    const {noteId}=req.params
    console.log(req.body)
    const editNote=await noteModel.findOneAndUpdate({_id:noteId},req.body)
    if(editNote){
        res.send("Edited successfully")
    }else{
        res.send("Couldn't Edited")
    }
})
app.listen(port, async () => {
    try {
      await connection;
      console.log("Connected to db successfully");
    } catch (err) {
      console.log(err);
    }
    console.log(`Server started at ${port}`);
  });