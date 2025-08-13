import { get_questions } from "$lib/quiz_prep"

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
    expect(firstQuestion).toHaveProperty("correctAnswer")
})