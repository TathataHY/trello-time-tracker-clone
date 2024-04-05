export type Board = {
  id: string;
  title: string;
  lists: List[];
  theme: Theme;
};

export type List = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
};

export type Theme =
  | "lumiflex"
  // | "zenitho"
  | "novatrix"
  | "velustro"
  | "tranquiluxe"
  | "opulento"
  | "none";

export type ThemeOption = {
  id: Theme;
  component: JSX.Element;
};
