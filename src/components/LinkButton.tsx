import Link from "next/link";
import React from "react";

interface LinkButtonComponentProps {
  text: string;
  to: string;
}

const LinkButton: React.FC<LinkButtonComponentProps> = ({ text, to }) => {
  return (
    <Link href={to} className="block w-fit font-bold text-gray-200">
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

export { LinkButton };
