import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
}

const BoardWrapper = ({ id, children, ...props }: Props) => {
  const handleMouseEnter = (id: string) => {
    const board = document.getElementById(id);
    const options = board?.getElementsByClassName("board-options");

    for (const option of options?.length ? options : []) {
      option.classList.remove("invisible");
    }
  };
  const handleMouseLeave = (id: string) => {
    const board = document.getElementById(id);
    const options = board?.getElementsByClassName("board-options");

    for (const option of options?.length ? options : []) {
      option.classList.add("invisible");
    }
  };

  const { className } = props;

  return (
    <div
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
      id={id}
      className={cn(
        "board-wrapper flex justify-between items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export { BoardWrapper };
