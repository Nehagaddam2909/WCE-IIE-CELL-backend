const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const idea=new Schema({
    title:{
        type:String,
        required:true,
    
    },
    team_leader:{
        type:String,
        required:true,
    
    },
    role:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true,
    
    },email:{
        type:String,
        required:true,
    
    },department:{
        type:String,
        required:true,
    
    },
    
    year:{
        type:String,
        required:true,

    },report:{
        type:String,
        required:true,

    },relevance:{
        type:String,
        required:true,

    },
    innovation:{
        type:String,
        required:true,

    },potential:{
        type:String,
        required:true,

    },viability:{
        type:String,
        required:true,

    },
    impact:{
        type:String,
        required:true,
    },applicability:{
        type:String,
        required:true,

    },date_time:{
        type:Date,
        required:true,

    }

});


export default idea;