import type { List, Task as TaskType } from "@/types";
import { Separator } from "@/components/ui/separator";
import { BoardWrapper } from "@/components/BoardWrapper";
import { BoardOptions } from "@/components/BoardOptions";
import { Plus } from "lucide-react";
import { Task } from "./Task";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

type Props = {
  list: List;
  boardName: string;
};

const List = ({ list, boardName }: Props) => {
  const [todoList, todos] = useDragAndDrop<HTMLUListElement, TaskType>(
    list.tasks,
    { group: boardName, plugins: [animations()] }
  );

  return (
    <div className="h-fit p-4 bg-primary rounded-lg text-primary-foreground min-w-52 shadow-xl">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{list.title}</h3>
        <Separator />
        <ul
          ref={todoList}
          id={`${list.id}-tasks`}
          className="flex flex-col gap-2 py-2"
        >
          {todos.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>

        <div className="mt-2">
          <BoardWrapper id={`${list.id}-add-task`}>
            <div className="flex gap-2 w-full items-center justify-between">
              <h4>Añadir Tarea</h4>
              <BoardOptions className="p-0">
                <Plus
                  size={24}
                  className="hover:text-primary p-1 w-full h-full"
                />
              </BoardOptions>
            </div>
          </BoardWrapper>
        </div>
      </div>
    </div>
  );
};

export { List };
