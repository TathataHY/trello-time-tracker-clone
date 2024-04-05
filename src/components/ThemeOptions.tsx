import type { Theme, ThemeOption } from "@/types";
import React from "react";

type Props = {
  themeOption: ThemeOption;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeOptions = ({ themeOption, setTheme }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const id = target.id as Theme;

    if (id) {
      setTheme(id);
    }
  };

  return (
    <div className="w-1/2 h-36 cursor-pointer relative">
      {themeOption.id === "none" ? (
        <div className="w-full h-full flex items-center justify-center text-slate-300 font-semibold text-lg">
          None
        </div>
      ) : (
        <>{themeOption.component}</>
      )}
      <div
        id={themeOption.id}
        onClick={handleClick}
        className="absolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-20"
      ></div>
    </div>
  );
};

export { ThemeOptions };
