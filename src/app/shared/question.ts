import { Answer } from './answer';

export interface Question {
    questionLabel: string;
    answers: Answer[];
}
