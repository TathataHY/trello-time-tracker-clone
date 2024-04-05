import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, Pencil, Plus, Trello } from "lucide-react";
import { BoardWrapper } from "@/components/BoardWrapper";
import { BoardOptions } from "@/components/BoardOptions";
import { SetUserName } from "@/components/SetUserName";
import { useStore } from "@/utils/user";
import { Link } from "react-router-dom";

const boards = [
  { id: "board-1", name: "Tablero 1", icon: Trello },
  { id: "board-2", name: "Tablero 2", icon: Trello },
  { id: "board-3", name: "Tablero 3", icon: Trello },
];

const Aside = () => {
  const { user } = useStore();

  return (
    <aside id="aside" className="w-full bg-muted h-full">
      <div id="profile" className="flex items-center pl-4 h-20">
        <Avatar>
          <AvatarImage src="https://github.com/tathatahy.png" />
          <AvatarFallback>{user[0]}</AvatarFallback>
        </Avatar>

        <div className="p-4 flex flex-col">
          <BoardWrapper id="edit-user">
            <h2 className="text-xl font-bold">{user}</h2>
            <BoardOptions>
              <SetUserName>
                <Pencil size={16} className="cursor-pointer" />
              </SetUserName>{" "}
            </BoardOptions>
          </BoardWrapper>
          <span className="text-xs italic">Gratis</span>
        </div>
      </div>

      <Separator />

      <div id="boards">
        <div id="title" className="p-4">
          <BoardWrapper id="board">
            <div className="flex gap-2">
              <Trello size={24} />
              <h2 className="font-medium">Tableros</h2>
            </div>
            <BoardOptions>
              <Plus size={24} />
            </BoardOptions>
          </BoardWrapper>
        </div>

        <div className="w-3/4 pl-4">
          <Separator />
        </div>

        <div id="boards-container" className="flex flex-col py-4">
          {boards.map((board) => (
            <div key={board.id} className="hover:bg-muted-foreground px-4 py-1">
              <BoardWrapper id={board.id}>
                <Link to={`/board/${board.id}`}>
                  <h3>{board.name}</h3>
                </Link>
                <BoardOptions>
                  <Ellipsis size={16} />
                </BoardOptions>
              </BoardWrapper>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export { Aside };
