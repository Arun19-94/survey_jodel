var questionModels = require("./questions.model")

this.findOne = (id)=>{
    try {
        for (let i = 0; i < questionModels.length; i++) {
            const questionModel = questionModels[i];
            if (questionModel._id == id) {
                return questionModel
            }
        }
        return "No Questions For This Id"
    } catch(err) {
        throw new Error(err)
    }
}
this.findSurvey = (id)=>{
    try {
        let survey = []
        console.log("findSurvey")
        for (let i = 0; i < questionModels.length; i++) {
            const questionModel = questionModels[i];
            if (questionModel.survey_id == id) {
                survey.push(questionModel)
            }
        }
        return survey
    } catch(err) {
        throw new Error(err)
    }
}

this.create = async(question)=>{
    try {
        questionModels.push(question)
    } catch(err) {
        throw new Error(err)
    }
}

this.list = async()=>{
    try {
        return await questionModels
    } catch(err) {
        throw new Error(err)
    }
}
