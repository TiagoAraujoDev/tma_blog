import { CarouselContainer } from "./CarouselContainer";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-around py-16 lg:flex-row mx-6">
      <div className="mb-12">
        <span className="flex text-center sm:text-right items-center gap-2 text-sm font-semibold uppercase text-gray-400">
          <span className="block h-[1px] w-2 bg-blue-400" />
          I&apos;m here to talk about tech
        </span>
        <h1 className="text-3xl text-center sm:text-right text-gray-100">
          My name is <span className="text-blue-400">Tiago Araujo</span>
        </h1>
        {/* <SocialLinks /> */}
      </div>
      <CarouselContainer />
    </section>
  );
};

export { Hero };
