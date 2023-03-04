const mongoose=require("mongoose")
const noteSchema=new mongoose.Schema({
    Title:{type:String,required:true},
    Date:{type:Date,default:Date.now}
})
const noteModel=mongoose.model("note",noteSchema)

module.exports={
    noteModel
}