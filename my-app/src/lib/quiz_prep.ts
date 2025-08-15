
export enum QuestionType {
    OPEN = "OPEN",
    CHOICE = "CHOICE"
}

export type Answer = {
    answerText: string,
    timeElapsed: number
} | string

type Verification = {
    correct: boolean
}

export type Question = {
    type: QuestionType,
    questionText: string,
    givenAnswer: string
    // how validate according to type
}

export function get_questions(quizName: string): Question[] {
    return [
        { "type": QuestionType.OPEN, "questionText": "Garden of Adam name", "givenAnswer": "Eden" },
        { "type": QuestionType.OPEN, "questionText": "Name of wife of Abraham", "givenAnswer": "Sarah" }
    ]
}


export class AnswerChecker {
    checkMany(questions: Question[], answers: Answer[]): boolean {
        if (questions.length != answers.length) {
            throw new Error("lengths of questions and answers do not match")
        }
        return false
    }

    // just tell me if all answers have been answered :D
    validateAnswered(answers: Answer[]): boolean {
        answers.forEach(a => {
            let answerText = this.getAnswerText(a)
            if (answerText.trim().length < 1) {
                throw new Error("One of answers has not been answered!")
            }
        });
        return true
    }

    private getAnswerText(a: Answer) {
        let answerText: string;
        if (typeof a === "object") {
            answerText = a.answerText
        } else {
            answerText = a
        }
        return answerText
    }

    check(question: Question, answer: Answer): Verification {
        let verification = { "correct": false }
        let answerText = this.getAnswerText(answer)
        if (question.type == QuestionType.OPEN) {
            verification = { "correct": answerText == question.givenAnswer }
        } else {
            throw new Error("We did not implement other types")
        }
        return verification
    }
}