import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface CarouselControlsProps {
  type: "left" | "right";
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

const CarouselControls = (props: CarouselControlsProps) => {
  return (
    <div className="flex items-center justify-center">
      {props.type === "left" ? (
        <button
          onClick={() => {
            if (props.canScrollPrev) {
              props.onPrev!();
            }
          }}
          disabled={!props.canScrollPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-md px-4 py-2 text-white outline-none"
        >
          <FiArrowLeftCircle className="h-6 w-6 text-blue-400" />
        </button>
      ) : (
        <button
          onClick={() => {
            if (props.canScrollNext) {
              props.onNext!();
            }
          }}
          disabled={!props.canScrollNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-md px-4 py-2 text-white outline-none"
        >
          <FiArrowRightCircle className="h-6 w-6 text-blue-400" />
        </button>
      )}
    </div>
  );
};
export { CarouselControls };
