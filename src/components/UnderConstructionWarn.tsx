import { MdOutlineConstruction } from "react-icons/md";

const UnderConstructionWarn = () => {
  return (
    <div className="absolute bottom-2 left-2 flex items-center justify-center gap-2 rounded bg-yellow-500 p-2 shadow-md shadow-black">
      <MdOutlineConstruction className="h-8 w-8 text-gray-50 dark:text-gray-950" />
      <p className="font-extrabold text-gray-50 dark:text-gray-950">
        Page under heavily construction
      </p>
    </div>
  );
};

export { UnderConstructionWarn };
