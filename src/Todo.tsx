// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };
import { TodoType } from "./types/todo";
import { VFC, FC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
