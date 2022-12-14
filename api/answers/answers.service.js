var answerModels = require("./answers.model")
const questionService = require("../questions/questions.service")

this.findOne = (id)=>{
    try {
        let survey_list = []
        for (let i = 0; i < answerModels.length; i++) {
            const answerModel = answerModels[i];
            if (answerModel.user_id == id) {
                survey_list.push(answerModel)
            }
        }
        return survey_list
    } catch(err) {
        console.log(err)
        throw new Error(err)
    }
}

this.create = async(answer)=>{
    try {
        let isvalidate =  await(this.validate(answer))
        answerModels.push(answer)
    } catch(err) {
        throw new Error(err)
    }
}

this.list = async()=>{
    try {
        return await answerModels
    } catch(err) {
        throw new Error(err)
    }
}

this.validate = async(answers)=>{
    try {
        let survey_questions = questionService.findSurvey(answers.survey_id) 
        if (survey_questions.length !== answers.answers.length) {
            throw new Error("Answer count mismatch")
        }
        for (let i = 0; i < answers.answers.length; i++) {
            const answer = answers.answers[i].answer;
            answer_count = 0
            for (const key in answer) {
                if (answer[key] == true) {
                    answer_count +=1
                }
              }
            console.log("answer_count")
            console.log(answer_count)
            if (answer_count <2) {
                throw new Error(`You have to select atlest 2 options for question ${answers.answers[i].question_id}`)
            }
        }
    } catch(err) {
        throw new Error(err)
    }
}



