import { AnswerChecker, get_questions, QuestionType, Answer } from "$lib/quiz_prep"

test('it is true', async () => {
    expect(true).toBeTruthy()
})

test("get questions returns list of them", async () => {
    let questions = get_questions("quiz_name");
    expect(questions).toHaveLength(2)
})

test("Question has all required parameters", async () => {
    let questions = get_questions("some quiz")
    let firstQuestion = questions[0]
    expect(firstQuestion).toHaveProperty("type")
    expect(firstQuestion).toHaveProperty("questionText")
    expect(firstQuestion).toHaveProperty("givenAnswer")
})

test("verify open question fails if lenghts of answers and question do not match ", async () => {
    let checker = new AnswerChecker()
    let questions = [
        { "type": QuestionType.OPEN, "questionText": "Are you OK", "givenAnswer": "OK" }
    ]
    let answers: Answer[] = []
    expect(() => { checker.checkMany(questions, answers) }).toThrowError("lengths")
})

test("validate if given answers are empty throw an error ", async () => {
    let checker = new AnswerChecker()

    let answers = [
        { "answerText": " ", "timeElapsed": 0 }
    ];
    expect(() => { checker.validateAnswered(answers) }).toThrowError("answered")
})

test("validate if given answers in simple form are empty ", async () => {
    let checker = new AnswerChecker()

    let answers = [
        "  "
    ];
    expect(() => { checker.validateAnswered(answers) }).toThrowError("answered")
})


// test("verify open question succeeds for open questions ", async () => {
//     let checker = new AnswerChecker()
//     let questions = [
//         { "type": QuestionType.OPEN, "questionText": "Are you OK", "givenAnswer": "OK" }
//     ]
//     let answers = [
//         { "answerText": "OK", "timeElapsed": 0 }
//     ]
//     let checkResult = checker.checkMany(questions, answers)
//     expect(checkResult).toBeTruthy()
// })

test("verify single open question correct ", async () => {
    let checker = new AnswerChecker()
    let question =
        { "type": QuestionType.OPEN, "questionText": "Are you OK", "givenAnswer": "OK" }
    let answer = { "answerText": "OK", "timeElapsed": 0 }
    let checkResult = checker.check(question, answer)
    let correct = checkResult.correct
    expect(correct).toBeTruthy()
})

test("verify single open question incorrect ", async () => {
    let checker = new AnswerChecker()
    let question =
        { "type": QuestionType.OPEN, "questionText": "Are you OK", "givenAnswer": "OK" }
    let answer = { "answerText": "not OK", "timeElapsed": 0 }
    let checkResult = checker.check(question, answer)
    let correct = checkResult.correct
    expect(correct).toBeFalsy()
})