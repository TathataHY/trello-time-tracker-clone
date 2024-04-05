import type { Board, Theme, ThemeOption } from "@/types";
import { Separator } from "@/components/ui/separator";
import { List } from "@/components/List";
import { Ellipsis, Plus } from "lucide-react";
import {
  Lumiflex,
  Novatrix,
  Opulento,
  Tranquiluxe,
  Velustro,
  // Zenitho,
} from "uvcanvas";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { ThemeOptions } from "@/components/ThemeOptions";
import { useParams } from "react-router-dom";
import { useStore } from "@/utils/board";

const themes: ThemeOption[] = [
  { id: "lumiflex", component: <Lumiflex /> },
  // { id: "zenitho", component: <Zenitho /> },
  { id: "novatrix", component: <Novatrix /> },
  { id: "velustro", component: <Velustro /> },
  { id: "tranquiluxe", component: <Tranquiluxe /> },
  { id: "opulento", component: <Opulento /> },
  { id: "none", component: <></> },
];

const Board = () => {
  const { boardId } = useParams();

  const board = useStore((state) => state.getBoardById(boardId!));

  const [themeMenuOpen, setThemeMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>(board.theme);

  return (
    <section className="w-full h-full relative overflow-hidden">
      <div className="w-full h-full absolute">
        {themes.find((t) => t.id === theme)?.component}
      </div>

      <div className="absolute top-0 left-0 w-full h-[calc(100%-80.6px)]">
        <div
          id="board-header"
          className="w-full h-20 flex items-center justify-between p-4 bg-slate-800 bg-opacity-80 text-primary-foreground"
        >
          <h2 className="pl-4 text-xl font-semibold">{board.title}</h2>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-1 hover:bg-slate-400 hover:bg-opacity-40 rounded-sm cursor-pointer">
                <Ellipsis size={24} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setThemeMenuOpen(true)}
                className="cursor-pointer"
              >
                Change Theme
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-destructive hover:none">Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Separator />

        <div
          id="board-content"
          className="flex gap-4 p-4 overflow-x-scroll h-full w-full"
        >
          {board.lists.map((list) => (
            <List key={list.id} list={list} boardName={board.title} />
          ))}

          <div
            id="board-add-list"
            className="min-w-52 h-fit bg-primary rounded-lg p-4 flex justify-between text-primary-foreground hover:opacity-50 cursor-pointer gap-2"
          >
            <h4 className="font-semibold">Añadir Lista</h4>
            <Plus size={24} />
          </div>
        </div>
      </div>

      <ThemeMenu
        open={themeMenuOpen}
        setOpen={setThemeMenuOpen}
        setTheme={setTheme}
      />
    </section>
  );
};

const ThemeMenu = ({
  open,
  setOpen,
  setTheme,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
  const [themeAux, setThemeAux] = React.useState<Theme>("none");

  React.useEffect(() => {
    setTheme(themeAux);
    setOpen(false);
  }, [themeAux, setTheme, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Themes</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-wrap justify-center py-4">
              {themes.map((theme) => (
                <ThemeOptions
                  key={theme.id}
                  themeOption={theme}
                  setTheme={setThemeAux}
                />
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { Board };
