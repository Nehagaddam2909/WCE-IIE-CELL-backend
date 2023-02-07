const { db } = require('../utils/db')
const ideaSubmissionServices = {
    get: (tableName) => {
        try {
            const data = db.query(`SELECT * FROM ${tableName}`)
            console.log(data)
            return data;
        } catch (error) {
            console.log("error", error)
            return null
        }
    },
    insert: ({ tableName, values }) => {
        try {
            db.query(`INSERT INTO ${tableName} VALUES(${values})`)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ideaSubmissionServices