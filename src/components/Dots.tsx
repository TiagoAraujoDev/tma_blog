import classNames from "classnames";

interface DotsComponentProps {
  itemsLength: number;
  selectedIndex: number;
}

const Dots = ({ itemsLength, selectedIndex }: DotsComponentProps) => {
  const arr = new Array(itemsLength).fill(0);

  return (
    <div className="my-2 flex -translate-y-5 justify-center gap-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-1 w-1 rounded-full bg-blue-400 transition-all duration-300":
                true,
              "opacity-50": !selected,
            })}
            key={index}
          />
        );
      })}
    </div>
  );
};
export { Dots };
