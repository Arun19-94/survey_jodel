var questions = [{
    "_id": 1,
    "status": "active",
    "created_by": "Arun",
    "type": "default",
    "survey_id":1,
    "category": "survey",
    "question": "What is your favorite color?", 
    "options": ["Blue", "Green", "Red", "Yellow"],
    "min_option_to_choose": 2
},{
    _id: 2,
    status: "active",
    created_by: "ArunA",
    type: "default",
    category: "survey",
    "survey_id":1,
    question: "What is your favorite books?", 
    options: ["Book_A", "Book_B", "Book_C", "Book_D"],
    min_option_to_choose: 2
}]

module.exports = questions