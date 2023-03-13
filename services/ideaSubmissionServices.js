const { db } = require('../utils/db');
const  idea  = require('../models/idea') 
const  team_members  = require('../models/team_members') 
const ideaSubmissionServices = {
    get: async () => {
        try {
            const data = await idea.find();
            console.log(data)
            if(data) return data;
        } catch (error) {
            console.log("error:",error)
            return null;
        }
    },
    insert:async  (tableName,inputs) => {
       try {
            // console.table(inputs)
            // const data =  await idea.create(inputs);
            // if(data) return data;
            // return false;  
            if(tableName=='idea'){
                const data =  await idea.create(inputs);
                if(data) return data;
                return false; 
            }else{
                console.log(inputs)
                const data =  await team_members.create(inputs);
                if(data) return data;
                console.log("data:",data)
                return false; 
            }
       } catch (error) {
        console.log(error)
            return false;        
       }
    },
    
    deleteLastInsertedRecord: (id) => {
      
    },
};

module.exports = ideaSubmissionServices;
