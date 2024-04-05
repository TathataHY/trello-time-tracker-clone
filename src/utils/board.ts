import type { Board, Theme } from "@/types";
import { create } from "zustand";

type Store = {
  boards: Board[];
  getBoardById: (boardId: string) => Board;
};

const board = [
  {
    id: "board-1",
    title: "Tablero 1",
    lists: [
      {
        id: "list-1",
        title: "Lista 1",
        tasks: [
          { id: "task-1", title: "Tarea 1" },
          { id: "task-2", title: "Tarea 2" },
        ],
      },
      {
        id: "list-2",
        title: "Lista 2",
        tasks: [
          { id: "task-3", title: "Tarea 3" },
          { id: "task-4", title: "Tarea 4" },
        ],
      },
    ],
    theme: "none" as Theme,
  },
];

const useStore = create<Store>((_set, get) => ({
  boards: board,
  getBoardById: (boardId) => {
    const board: Board | undefined = get().boards.find(
      (board) => board.id === boardId
    );
    if (!board) {
      throw new Error("Board not found");
    }
    return board;
  },
}));

export { useStore };
