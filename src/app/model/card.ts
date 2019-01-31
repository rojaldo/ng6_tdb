export class Card {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    answers: string[];

    constructor (myCard: any) {
        this.category = myCard.category;
        this.type = myCard.type;
        this.difficulty = myCard.difficulty;
        this.question = myCard.question;
        this.correctAnswer = myCard.correct_answer;
        this.incorrectAnswers = myCard.incorrect_answers;
        this.answers = myCard.incorrect_answers;
        this.answers.push(this.correctAnswer);
    }

}
