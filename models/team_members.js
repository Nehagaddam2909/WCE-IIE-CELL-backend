const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const team_members=new Schema({
    entry_id:{
        type:Schema.Types.ObjectId,
        ref:"idea"
      },
      team_member:{
        type:String,
        required:true
      },

});


module.exports = mongoose.model("team_members", team_members);
