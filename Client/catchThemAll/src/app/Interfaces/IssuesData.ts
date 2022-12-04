export interface IssuesData{
  issueId: number;
  title: string;
  date: string;
  isSolved: boolean;
  text: string;
  tags : Tags[];
  username: string;
  role: string;
}
export interface Tags{
  name: string;
}

