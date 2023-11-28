import { NavBar } from "./NavBar";

const Header = () => {
  return (
    <header className="fixed z-10 w-screen bg-stone-700/30 px-10 py-6 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="mr-2 text-xl font-extrabold text-white">
            <span className="text-blue-400">~</span>/tma_blog $
          </span>
          <span className="cursor-block" />
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export { Header };
