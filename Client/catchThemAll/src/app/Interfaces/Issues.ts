export interface Issue{
  issueId: number;
  title: string;
  date: string;
  isSolved: boolean;
  tags : Tags[];
  userDetail: UserDetail[];
}
export interface Tags{
  id: number;
  name: string;
  count: number;
}

export interface UserDetail{
  id: number;
  username: string;
  email: string;
  role: string;
  tags: Tags[];
  icon: string;
}
