const { get, insert, deleteLastInsertedRecord } = require('../../services/ideaSubmissionServices');
// const { db } = require('../../utils/db');
// const report = require('../../public/upload/reports/report_1624530000000.pdf');
const ideaSubmissionController = {
    getALlResponses: async (req, res) => {
        const data =  await get();
        if(data?.length>0) return res.json({ success: true, data });
        return res.json({ success: false, message: 'Something went wrong' }); 
    },
    insertIntoTable: async (req, res) => {
        console.log(req.body)
        const {
            title,
            team_leader,
            role,
            mobile_no,
            email,
            department,
            year,
            team_member,
            relevance,
            innovation,
            potential,
            viability,
            applicability,

        } = req.body;
        const report = req.file.filename;
        const date_time = new Date().toISOString().slice(0, 19).replace('T', ' ');;

        // console.log("report : ", report);
        const data =  await insert('idea',{title,team_leader,role,mobile_no,email,department,year,report,relevance,innovation,potential,viability,applicability,date_time});
        if(data){
            const entry_id =  data._id;
            const teamMembers = team_member.split(',');
            let f = 0;
            teamMembers.forEach(async(team_member) => {
                const data2 =  await insert('team_members',{entry_id,team_member});
                if(!data2) { f = 1; return res.json({ success: false, message: 'Something went wrong' });}
            });
        if(!f)
          return  res.json({ success: true, data });
        else return res.json({ success: false, message: 'Something went wrong' });
        }
      else  return res.json({ success: false, message: 'Something went wrong' });
    },

};

module.exports = ideaSubmissionController;
