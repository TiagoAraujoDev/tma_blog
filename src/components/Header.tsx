import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-16 mt-6 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <span className="mr-2 text-xl font-extrabold text-white">
          ~/tma_blog $
        </span>
        <span className="cursor-block" />
      </div>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="ktransition cursor-pointer border-b border-transparent font-semibold text-white hover:border-b hover:border-blue-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
