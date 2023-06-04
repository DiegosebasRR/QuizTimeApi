export interface Questionnaire {
  titles: string;
  description: string;
  duration: number;
  userId: string;
  participants?: Array<String>;
  questions?: Array<String>;
}
