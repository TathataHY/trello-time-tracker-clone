import { Link } from "react-router-dom";
import { Trello } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-foreground text-background flex items-center p-4 shadow-lg">
      <Link to="/" className="flex items-center gap-1">
        <Trello size={24} />
        <h1 className="font-medium text-2xl leading-[1.9rem]">Trello</h1>
      </Link>
    </header>
  );
};

export { Header };
