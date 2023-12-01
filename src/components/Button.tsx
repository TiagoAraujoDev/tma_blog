import Link from "next/link";
import React from "react";

interface ButtonComponentProps {
  text: string;
}
const Button: React.FC<ButtonComponentProps> = ({ text }) => {
  return (
    <Link href="/blog" className="block w-fit font-bold text-gray-200">
      <div
        className="
        flex h-12 items-center justify-center rounded
        bg-blue-500 px-4 py-3 shadow-md shadow-black transition-all
        duration-200 ease-in-out hover:scale-105 hover:bg-blue-400 hover:shadow-lg
        hover:shadow-black
        "
      >
        {text}
      </div>
    </Link>
  );
};

export { Button };
