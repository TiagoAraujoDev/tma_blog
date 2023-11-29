import { NavBar } from "./NavBar";

const Header = () => {
  return (
    <header className="fixed z-10 w-screen bg-gray-200/30 px-10 py-6 backdrop-blur-sm dark:bg-stone-700/30">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="mr-2 text-xl font-extrabold text-gray-900 dark:text-white">
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
