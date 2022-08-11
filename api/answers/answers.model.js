var answers = [{
    "_id": 1,
    "survey_id": 1,
    "user_id":1,
    "status": "active",
    "created_by": "Arun",
    "issummitted":true,
    "answers": [
        {
            "question_id": 1,
            "isSaved":true,
            "answer":{
                "Blue": false,
                "Green": true, 
                "Red": true, 
                "Yellow": false
            }
        },{
            "question_id": 1,
            "isSaved":true,
            "answer":{
                "Book_A": false,
                "Book_B": false,
                "Book_C": false, 
                "Book_D": false
            }
        }
    ]
},{
    "_id": 2,
    "survey_id": 1,
    "user_id":2,
    "status": "active",
    "created_by": "Arun",
    "issummitted":false,
    "answers": [
        {
            "question_id": 1,
            "isSaved":true,
            "answer":{
                "Blue": true,
                "Green": true, 
                "Red": true, 
                "Yellow": false
            }
        },{
            "question_id": 1,
            "isSaved":false,
            "answer":{
                "Book_A": false,
                "Book_B": false,
                "Book_C": false, 
                "Book_D": false
            }
        }
    ]
}]

module.exports = answers