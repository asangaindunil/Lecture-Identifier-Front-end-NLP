export class Question {
    id: number;
    question:string;
    answerOne:string;
    answerTwo:string;
    answerThree:string;
    answerFour:string;

    constructor(id, question,answerOne,answerTwo,answerThree,answerFour){
        this.id = id
        this.question = question
        this.answerOne = answerOne
        this.answerTwo = answerTwo
        this.answerThree = answerThree
        this.answerFour =answerFour 
    }
}

