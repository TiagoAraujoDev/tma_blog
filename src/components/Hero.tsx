import { CarouselContainer } from "./CarouselContainer";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between py-16 md:flex-row">
      <div className="">
        <span className="flex items-center gap-2 text-sm font-semibold uppercase text-gray-400">
          <span className="block h-[1px] w-2 bg-blue-400" />
          I&apos;m here to talk about tech
        </span>
        <h1 className="text-3xl text-gray-100">
          My name is <span className="text-blue-400">Tiago Araujo</span>
        </h1>
        {/* <SocialLinks /> */}
      </div>
      <CarouselContainer />
    </section>
  );
};

export { Hero };
