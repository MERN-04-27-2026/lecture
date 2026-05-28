export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: string;
  content: string;
  priority: Priority;
  complete: boolean;
  date: Date;
}
