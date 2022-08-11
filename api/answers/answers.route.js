const answerService = require("./answers.service")
var counter = 2

module.exports = (app) => {
    app.get(('/api/answers/:userid/list'), this.findOne);
    app.get(('/api/answers/list/admin/answer_list'), this.adminList);
    app.post(('/api/answers/create/:id'), this.create);
    // app.get(('/api/answers/list/:id' ), this.list);
}

this.findOne = async(req, res)=>{
    try {
        let user_id = parseInt(req.params.userid.toString())
        if (isNaN(user_id)) {
            return res.status(400).send("user_id  number not found")
        }
        answers = answerService.findOne(user_id)
        res.status(200).send(answers)
    } catch(err) {
        res.status(400).send(JSON.stringify(err))
    }

}

this.create = async(req, res)=>{
    try {
        let answer = req.body
        console.log("answer")
        let survey_id = parseInt(req.params.id.toString())
        counter = counter + 1
        answer._id = counter
        if (isNaN(survey_id)) {
            return res.status(400).send("survey id  number not found")
        }
        await answerService.create(answer, survey_id)
        res.status(201).send(`crated successfully with id ${counter}`)
    } catch(err) {
        console.log("create")
        console.log(err)
        res.status(400).send(JSON.stringify(err))
    }
    
}

this.adminList = async(req, res)=>{
    try {
        let list = await answerService.list()
        res.status(200).send(list)
    } catch(err) {
        res.status(400).send(JSON.stringify(err))
    }
    
}