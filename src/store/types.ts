export interface AnswerType {
  id: string;
  answer: string;
}

interface QuestionType {
  id: number;
  question: string;
  answers: AnswerType[];
  correctAnswer: string;
  reward: number;
}

export interface InitGameStateType {
  currentStep: number;
  earnedReward: number;
  questions: QuestionType[];
  selectedAnswer: null | string;
}
