
enum QuestionType {
    OPEN = "OPEN",
    CHOICE = "CHOICE"
}

export type Answer = {
    answerText: string,
    timeElapsed: number
}

type Verification = {
    correct: boolean
}

type Question = {
    type: QuestionType,
    questionText: string,
    correctAnswer: string
    // how validate according to type
}

export function get_questions(quizName: string): Question[] {
    return [
        { "type": QuestionType.OPEN, "questionText": "Garden of Adam name", "correctAnswer": "Eden" },
        { "type": QuestionType.OPEN, "questionText": "Name of wife of Abraham", "correctAnswer": "Sarah" }
    ]
}

export function verify(question: Question, answer: Answer): Verification {
    let verification = { "correct": false }
    if (question.type == QuestionType.OPEN) {
        verification = { "correct": answer.answerText == question.correctAnswer }
    } else {
        throw new Error()
    }
    return verification
}

