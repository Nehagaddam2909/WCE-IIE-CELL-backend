const { get, insert, deleteLastInsertedRecord } = require('../../services/ideaSubmissionServices');
const { db } = require('../../utils/db');
// const report = require('../../public/upload/reports/report_1624530000000.pdf');
const ideaSubmissionController = {
    getALlResponses: (req, res) => {
        get('idea', (data) => {
            console.log(data);
            if (data) return res.json({ success: true, data });
            return res.json({ success: false, message: 'Something went wrong' });
        });
    },
    insertIntoTable: (req, res) => {
        const {
            title,
            leader,
            type,
            phone,
            email,
            department,
            year,
            team,
            relevance,
            innovation,
            impact,
            viability,
            applicability,

        } = req.body;
        // get current data in yyyy-mm-dd hh:mm:ss format
        // console.log("report dir : ", __dirname + '/public/upload/reports/' + req.file.filename);
        // const report = require('../../public/upload/reports/' + req.file.filename);
        const report = req.file.filename;
        console.log("report : ", report);
        try {
            const d = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const values = `'${title}', '${leader}', '${type}', '${phone}', '${email}', '${department}', '${year}','${report}', '${relevance}', '${innovation}', '${impact}', '${viability}', '${applicability}' , '${d}' `;
            console.log(values);
            const data = insert({ tableName: 'idea', values, custom: true });
            if (!data || data == undefined) res.json({ success: false, message: "something went wrong!" })
            console.log("data : Ayela hai",);
            // get current entry_id from table idea
            db.query(`select * from idea where entry_id = (SELECT LAST_INSERT_ID())`, (err, currId) => {
                if (err) {
                    // console.log(err)
                    return res.json({ success: false, message: 'Something went wrong' });
                }
                console.log("current id : ", currId[0].entry_id);
                const teamMembers = team.split(',');
                const values2 = [];

                teamMembers.forEach((member) => {
                    // console.log(member);
                    values2.push(`${currId[0].entry_id}, '${member}'`);
                })
                // console.log(values2);
                values2.forEach((value) => {
                    if (!insert({ tableName: 'team_members', values: value, custom: false })) throw "Somethin went wrong!"
                })
                // const data2 = insert({ tableName: 'team_members', values2 })
                return res.json({ success: true, data });
                // return res.json({ success: false, message: 'Something went wrong' });
            })

        } catch (error) {
            console.log(error);
            db.query(`select * from idea where entry_id = (SELECT LAST_INSERT_ID()+1)`, (err, currId) => {
                deleteLastInsertedRecord(currId[0].entry_id);
                return res.json({ success: false, message: 'Something went wrong' });
            })

        }


    },

};

module.exports = ideaSubmissionController;
