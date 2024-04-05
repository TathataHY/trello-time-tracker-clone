import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { Aside } from "@/components/Aside";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

function App() {
  const [asideOpen, setAsideOpen] = React.useState(true);

  return (
    <div className="flex flex-col h-screen">
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex w-full h-full grow">
        <div
          id="aside-content"
          className={cn(
            "transition-all duration-300",
            asideOpen
              ? "w-1/3 lg:w-1/4 xl:w-1/5 relative"
              : "w-[2%] lg:w-[1%] relative bg-background"
          )}
        >
          {asideOpen && <Aside />}
          <div className="absolute top-6 right-[-1rem] bg-foreground text-background rounded-full flex items-center p-1 z-10 hover:bg-slate-700 transition-all duration-300">
            <button onClick={() => setAsideOpen(asideOpen ? false : true)}>
              {asideOpen ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
            </button>
          </div>
        </div>

        <Separator orientation="vertical" />
        <div
          id="content"
          className={asideOpen ? "w-2/3 lg:w-3/4 xl:w-4/5" : "w-full"}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
