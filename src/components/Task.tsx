import type { Task } from "@/types";
import { BoardWrapper } from "@/components/BoardWrapper";
import { Ellipsis } from "lucide-react";
import { BoardOptions } from "@/components/BoardOptions";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  return (
    <BoardWrapper
      id={task.id}
      className="p-2 bg-muted rounded-md text-primary shadow-sm shadow-slate-200"
    >
      <li>{task.title}</li>

      <BoardOptions className="p-1 hover:bg-muted-foreground">
        <Ellipsis size={16} />
      </BoardOptions>
    </BoardWrapper>
  );
};

export { Task };
