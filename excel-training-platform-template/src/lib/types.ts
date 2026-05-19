export interface User {
  id: number;
  name: string;
  login: string;
  pass: string;
  role: 'king' | 'commander' | 'soldier';
  gId: number | null;
  days: number;
  access: 'all' | 'foundation' | 'pro' | 'none';
  cat: string;
  ls: string;
  activeToken: string;
}

export interface Group {
  id: number;
  name: string;
  color: string;
  cmdId: number | null;
}

export interface Session {
  id: number;
  uid: number;
  gid: number | null;
  date: string;
  lt: string;
  ot: string;
  min: number;
}

export interface Stuck {
  uid: number;
  uName: string;
  course: string;
  idx: number;
  title: string;
  date: string;
  ts: number;
}

export interface LessonData {
  n: number;
  d: string;
  t: string;
  desc: string;
  items: string[];
  keys: [string, string][];
  tables: TableData[];
  sc: [string, string][];
  bog: string | null;
  nat: string;
  files?: string[];
}

export interface TableData {
  label: string;
  h: string[];
  hr: string[];
  hc: string[];
  rows: string[][];
  st: (string | number)[][];
  f: string | null;
  fd: string | null;
}

export interface QuizQuestion {
  q: string;
  opts: string[];
  ans: number;
  exp: string;
}

export interface QuizState {
  current: number;
  score: number;
  done: boolean;
  answered: number[];
}

export interface DB {
  groups: Group[];
  users: User[];
  sessions: Session[];
  stucks: Stuck[];
}
