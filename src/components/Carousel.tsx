import autoPlay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";

// import { CarouselControls } from "./CarouselControls";
import { Dots } from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoPlay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  // const canScrollPrev = !!emblaApi?.canScrollPrev();
  // const canScrollNext = !!emblaApi?.canScrollNext();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-200">
        What I talk about?
      </h2>
      {/* <CarouselControls */}
      {/*   type="left" */}
      {/*   canScrollPrev={canScrollPrev} */}
      {/*   onPrev={() => emblaApi?.scrollPrev()} */}
      {/* /> */}
      <div
        className="w-full cursor-grabbing overflow-hidden rounded bg-stone-200/30 shadow-lg shadow-gray-700 backdrop-blur-sm dark:bg-stone-700/30 dark:shadow-lg dark:shadow-black md:w-[600px]"
        ref={emblaRef}
      >
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      {/* <CarouselControls */}
      {/*   type="right" */}
      {/*   canScrollNext={canScrollNext} */}
      {/*   onNext={() => emblaApi?.scrollNext()} */}
      {/* /> */}
    </div>
  );
};
export { Carousel };
