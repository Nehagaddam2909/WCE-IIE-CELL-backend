const { db } = require('../utils/db');
const ideaSubmissionServices = {
    get: (tableName,cb) => {
        try {

            // ALTER TABLE idea MODIFY COLUMN relevance TEXT;
          

            db.query(`SELECT i.*, ( SELECT GROUP_CONCAT(name SEPARATOR ', ') FROM team_members WHERE entry_id = i.entry_id ) AS team_members FROM ${tableName} i;`, (err, data) => {
                if (err) {
                    console.log('get err: ', err);
                    return null;
                }
                // console.log(data);
                return cb(data);
            });
        } catch (error) {
            console.log('error', error);
            return cb(null);
        }
    },
    insert: ({ tableName, values, custom }) => {
        try {
            if (custom) {
                db.query(
                    `INSERT INTO ${tableName} (title,team_leader,role,mobile_no,email,department,year,report,relevance,innovation,potential,viability,applicability,date_time) VALUES(${values})`,
                    (err, data) => {
                        if (err) {
                            console.log('insert err: ', err);
                            return false;
                        }
                        console.log(data);
                    }
                );
            } else {
                db.query(`INSERT INTO ${tableName} VALUES(${values})`, (err, data) => {
                    if (err) {
                        console.log(err);
                        return false;
                    }
                    console.log(data);
                });
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    lastInsertId: async () => {
        try {
        } catch (error) {
            console.log('error', error);
            return null;
        }
    },
    deleteLastInsertedRecord: (id) => {
        db.query(
            'DELETE  FROM team_members WHERE entry_id = ' + id,
            (err, data) => {
                if (err) console.log(err);
                // return false;
                console.log('idhar');
                db.query('DELETE  FROM idea WHERE entry_id = ' + id, (err, data) => {
                    if (err) console.log(err);
                    return false;
                    return true;
                });
            }
        );
    },
};

module.exports = ideaSubmissionServices;
