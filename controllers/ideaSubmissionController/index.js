const { get } = require('../../services/ideaSubmissionServices')
const ideaSubmissionController = {
    getALlResponses: (req, res) => {
        const data = get('idea');
        if (data)
            return res.json({ success: true, data });
        return res.json({ success: false, message: "Something went wrong" })
    },
    insertIntoTable: (req, res) => {

    }
}

module.exports = ideaSubmissionController