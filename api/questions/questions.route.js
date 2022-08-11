const questionService = require("./questions.service")
var counter = 2
module.exports = (app) => {
    app.get(('/api/questions/:id'), this.findOne);
    app.get(('/api/questions/survey/:id'), this.findSurvey);
    app.post(('/api/questions/create'), this.create);
    app.get(('/api/questions/list/question_list'), this.list);
}

this.findOne = async(req, res)=>{
    try {
        let question_id = parseInt(req.params.id.toString())
        console.log(question_id)
        if (question_id == null) {
            return res.status(400).send("Question number not found")
        }
        question = questionService.findOne(question_id)
        res.status(200).send(question)
    } catch(err) {
        // console.log(err)
        res.status(400).send(JSON.stringify(err))
    }

}

this.findSurvey = async(req, res)=>{
    try {
        let survey_id = parseInt(req.params.id.toString())
        console.log(survey_id)
        console.log("survey")
        if (survey_id == null) {
            return res.status(400).send("Question number not found")
        }
        survey = questionService.findSurvey(survey_id)
        res.status(200).send(survey)
    } catch(err) {
        res.status(400).send(JSON.stringify(err))
    }

}

this.create = async(req, res)=>{
    try {
        let question = req.body
        counter = counter + 1
        question._id = counter
        if (!question.survey_id) {
            return res.status(405).send("Surved Id required")
        }
        questionService.create(question)
        res.status(201).send(`created successfully with id ${counter}`)
    } catch(err) {
        res.status(400).send(JSON.stringify(err))
    }
    
}

this.list = async(req, res)=>{
    try {
        let list = await questionService.list()
        res.status(200).send(list)
    } catch(err) {
        res.status(400).send(JSON.stringify(err))
    }
    
}