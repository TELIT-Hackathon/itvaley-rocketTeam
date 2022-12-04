export interface Issue{
  issueId: number;
  title: string;
  date: string;
  isSolved: boolean;
  text: string;
  tags : Tags[];
  username: string;
}
export interface Tags{
  name: string;
}

