import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BoardOptions = ({ children, ...props }: Props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        "board-options invisible",
        "cursor-pointer hover:bg-muted p-1 rounded-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export { BoardOptions };
