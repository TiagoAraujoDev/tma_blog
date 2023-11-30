import { MdOutlineConstruction } from "react-icons/md";
function AboutPage() {
  return (
    <div>
      <div className="absolute top-[72px] flex w-full items-center justify-center gap-2 bg-yellow-500 p-2">
        <MdOutlineConstruction className="h-8 w-8 text-gray-200" />
        <p className="font-extrabold text-gray-200">
          Page under heavily construction
        </p>
      </div>
      <div>
        <h1>About</h1>
      </div>
    </div>
  );
}

export default AboutPage;
